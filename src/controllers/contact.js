exports.contact = (req, res, next) => {
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
    
                  .wrapper .contact {
                    font-size: 30px;
                    margin: 40px 0;
                    text-align: center;
                    color: #bada55;
                  }

                  .wrapper .contact .formulir {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    text-align: left;
                    padding-left: 450px;
                    margin-top: 10px;
                  }

                  .wrapper .contact form {
                    display: flex;
                    flex-direction: column;
                    text-align: left;
                  }

                  .wrapper .contact form * {
                    margin-bottom: 10px;
                  }

                  .wrapper .contact form label {
                    font-size: 20px;
                  }

                  .wrapper .contact form input {
                    width: 50%;
                  }

                  .wrapper .contact form textarea {
                    width: 50%;
                    height: 100px;
                  }

                  .wrapper .contact form button {
                    width: 100px;
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
    
                  <div class="contact">
                    <h1>Contact</h1>
                    <div class='formulir'>
                        <form action='/'>
                            <label for='nama'>Nama : </label>
                            <input type='text' id='nama' />
                            <label for='email'>Email : </label>
                            <input type='email' id='email' />
                            <label for='pesan'>Pesan : </label>
                            <textarea id='pesan'></textarea>
                            <button type='submit'>Kirim</button>
                        </form>
                    </div>
                  </div>
              </div>
              
              
            </body>
          </html>
          `);
};
