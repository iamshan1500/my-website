// 临时内存存储（Vercel重启会清空，仅用于演示）
let tasks = [];

export default function handler(req, res) {
    // 解决跨域问题
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');

    if (req.method === 'POST') {
        const newTask = { ...req.body, id: Date.now() };
        tasks.push(newTask);
        return res.status(201).json(newTask);
    }

    if (req.method === 'GET') {
        return res.status(200).json(tasks);
    }

    res.status(405).end(); // 不允许其他方法
}