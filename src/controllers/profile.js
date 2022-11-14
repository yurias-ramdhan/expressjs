exports.profile = (req, res, next) => {
  res.send(`<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Document</title>
          <style>
  
              * {
                  padding: 0;
                  margin: 0;
                  box-sizing: border-box;
              }
  
              .wrapper {
                  width: 80%;
                  margin: 10px auto;
                  background-color: rgba(0,0,0,0.6);
                  border: 1px solid grey;
                  border-radius: 50px;
                  padding: 20px;
              }
  
              .wrapper ul {
                  display: flex;
                  flex-direction: row;
                  list-style: none;
                  
              }
  
              .wrapper ul li {
                  margin-right: 10px;
              }
  
              .wrapper ul li a {
                  color: salmon;
                  text-decoration: none;
                  
              }
  
              .wrapper ul li a:hover {
                  color: lightblue;
              }

              .wrapper .profile {
                margin: 40px 0;
                text-align: center;
                color: #bada55;
              }
  
          </style>
        </head>
        <body>
          <div class="wrapper">
              <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/profile">Profile</a></li>
                  <li><a href="/contact">Contact</a></li>
              </ul>

              <div class="profile">
                <h1>Yurias Ramdhan</h1>
                <h2>26 tahun</h2>
                <h4>Palembang</h4>
              </div>
          </div>
          
          
        </body>
      </html>
      `);
};
