import { Comments } from "../models/schema";


class RecentComments {
    static async recentCommentsOnPhoto(req: any, res: any) {
        try {
            const details = req.body;
            const findID = await Comments.findOne({ where: { photo_id: details.photo_id } });
            // console.log(findID);
            if (findID != null) {
                Comments.findAll({
                    where: { photo_id: details.photo_id },
                    order: [['id', 'DESC']]
                })
                    .then((result: any) => {
                        const recentComments = [];
                        for (let i = 0; i < 3; i++) {
                            recentComments.push(result[i].contents);
                        }
                        console.log(recentComments);
                        // res.json({recentComments});
                    })
                    .catch((error: any) => {
                        console.log(error);
                    });
                res.status(200).json({ status: "success" });
            }
            else {
                res.status(404).json({ status: "Photo not found" });
            }
        }
        catch (err) {
            res.status(500).json({ status: "Server Error" });
        }
    }
}

export { RecentComments };