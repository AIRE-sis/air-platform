const http = require('http');
const { execSync } = require('child_process');

const PORT = 3001;

const checkServices = () => {
    try {
        // Check Node process
        const nodeProcess = execSync('Get-Process node -ErrorAction SilentlyContinue').toString();
        
        // Check MongoDB
        const mongoProcess = execSync('Get-Process mongod -ErrorAction SilentlyContinue').toString();
        
        return {
            node: nodeProcess ? 'running' : 'stopped',
            mongodb: mongoProcess ? 'running' : 'stopped'
        };
    } catch (error) {
        return {
            node: 'error',
            mongodb: 'error',
            error: error.message
        };
    }
};

const server = http.createServer((req, res) => {
    if (req.url === '/health') {
        const status = checkServices();
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(status));
    } else {
        res.writeHead(404);
        res.end();
    }
});

server.listen(PORT, () => {
    console.log(Monitoring server running on port );
});
