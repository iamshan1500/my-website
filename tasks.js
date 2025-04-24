// 临时存储（Vercel 重启后数据会丢失）
let tasks = [];

export default function handler(req, res) {
    // 允许跨域
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');

    // 发布任务（POST）
    if (req.method === 'POST') {
        const newTask = req.body;
        tasks.push(newTask);
        return res.status(201).json({ message: '任务已发布' });
    }

    // 查询任务（GET）
    if (req.method === 'GET') {
        const taskId = req.query.id;
        const task = tasks.find(t => t.id === taskId);
        return res.status(200).json(task || {});
    }

    res.status(405).end(); // 不支持其他方法
}
