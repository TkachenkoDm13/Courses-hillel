// 1) С помощью module fs необходимо:

// создать папку, и 3 файлы любым именем 
//( предусмотреть папка создавалась если не существует)

// Реалиовать удаление всех файлов в текущей папке( метод unlink)
// cоздать текстовы й файлом с любым содержимым и считать содержимое и перенести любой другой файл.



const fs = require('fs');
const util = require('util');

const mkdirAcync = util.promisify(fs.mkdir)

const folders = ['folder3files','readText','unlinkFiles' ];

async function run(){
    const createFolders = folders.map(folder =>!fs.existsSync(folder) ? mkdirAcync(folder):null).filter(Boolean);
    await Promise.all(createFolders);
    
    const [firstFolder, secondFolder, thirdFolder]  = folders;
    fs.writeFileSync(`${firstFolder}/text.txt`, 'file one'); // Create file
    fs.writeFileSync(`${firstFolder}/text2.txt`, 'file two'); 
    fs.writeFileSync(`${firstFolder}/text3.txt`, 'file three'); 
    const readFile = fs.readFileSync(`${firstFolder}/text.txt`) //read file
    fs.writeFileSync(`${secondFolder}/text4.txt`, readFile); // Create file

    fs.writeFileSync(`${thirdFolder}/delete1.txt`, 'delete file'); 
    fs.writeFileSync(`${thirdFolder}/delete2.txt`, 'delete file'); 
    fs.unlinkSync(`${thirdFolder}/delete1.txt`)
}
run();






// const users = [
//     { userName: 'Boria', id: 1, email: 'boria23@gmail.com'},
//     { userName: 'Vasia', id: 2, email: 'boria23@gmail.com'},
//     { userName: 'Misha', id: 3, email: 'boria23@gmail.com'},
//     { userName: 'Misha', id: 3, email: 'boria23@gmail.com'},
//     { userName: 'Misha', id: 3, email: 'boria23@gmail.com'},
//     ];
    
    

// http.createServer((req, res)=>{
//     res.setHeader('Access-Control-Allow-Origin', '*');
    
//     var uri = url.parse(req.url, true);
//     const query = uri.query;
//     const pathName = uri.pathname;
    
//     // if(pathName === '/user'){
//     //     const result = users.filter((user)=> {if(user.id = 1) return user})
//     //     res.end(JSON.stringify(result));
//     // } 

//     // ;
//     // if(pathName === '/users'){
//     //    const fin =  users.filter((el) => el.id = query.id )    
//     //    res.end(JSON.stringify(fin));
//     // } 

// }).listen(8090, ()=> console.log('server is create'));

//fetch('http://localhost:8090/user', {headers: {}}).then(data => data.json()).then(result => console.log(result));

