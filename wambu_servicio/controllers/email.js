var nodemailer = require('nodemailer');
var configuracionEmail = require("../auth/config.js");

const transporter = nodemailer.createTransport(configuracionEmail);

module.exports = {

  enviarEmail: function (req, res) {
    const message = {
      from: "jugos_wambu@hotmail.com",
      to: "karlaeliz03@gmail.com",
      subject: req.body.asunto,
      html:      
      `<!DOCTYPE html
      PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml">
  
  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>ADCONTUR</title>
  </head>
  
  <body style="Margin:0;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;min-width:100%;">
      <center class="wrapper"
          style="width:100%;table-layout:fixed;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;">
          <div class="webkit" style="max-width:600px;">
  
              <table class="outer" align="center"
                  style="border-spacing:0;font-family:sans-serif;color:#333333;Margin:0 auto;width:100%;max-width:600px;">
               
                  <tr class="white-back" style="background-color:#f7f7f7;">
                      <td class="one-column" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;">
                          <table width="100%" style="border-spacing:0;font-family:sans-serif;color:#3c3c3c;">
                              <tr>
                                  <td class="inner contents"
                                      style="padding-top:0px;padding-bottom:0px;padding-right:10px;padding-left:10px;width:100%;text-align:center;">
                                      <br>
                                      <p class="h4 center grey"
                                          style="margin:0;color:#3c3c3c;text-align:center;padding-top:10px;padding-bottom:10px;padding-right:20px;padding-left:20px;margin-top:0px !important;margin-bottom:10px !important;margin-right:0 !important;margin-left:0 !important;font-size:15px!important;line-height: 1.4 !important;">
                                          Se ha realizado una compra exitosa en Jugos Wambu.
                                      </p>
                                  </td>
                              </tr>
                          </table>
                      </td>
                  </tr>
                  <tr class="white-back" style="background-color:#f7f7f7;">
                      <td class="one-column" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;">
                          <table width="100%" style="border-spacing:0;font-family:sans-serif;color:#13683b;">
                              <tr>
                                  <td class="inner contents"
                                      style="padding-top:0px;padding-bottom:0px;padding-right:10px;padding-left:10px;width:100%;text-align:center;">
                                      <p class="h4 center grey"
                                          style="margin:0;color:#13683b;text-align:center;padding-top:10px;padding-bottom:10px;padding-right:20px;padding-left:20px;margin-top:0px !important;margin-bottom:10px !important;margin-right:0 !important;margin-left:0 !important;font-size:15px!important;line-height: 1.4 !important;">
                                          A continuación los detalles de la compra:
                                      </p>
                                  </td>
                              </tr>
                          </table>
                      </td>
                  </tr>
                  <tr class="white-back" style="background-color:#f7f7f7;">
                      <td class="one-column" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;">
                          <table width="100%" style="border-spacing:0;font-family:sans-serif;color:#3c3c3c;">
                              <tr>
                                  <td class="inner contents"
                                      style="padding-top:0px;padding-bottom:0px;padding-right:10px;padding-left:10px;width:100%;text-align:center;">
  
                                      <div style="padding-left: 80px !important; padding-right: 80px !important">
                                          <table border="0"
                                              style="font-family: sans-serif !important; color:#13683b !important; width: 100% !important; text-align: left !important; font-size: 15px !important">
                                              <tr>
                                                  <td
                                                      style="width: 50% !important;padding-top:5px;padding-bottom:5px;padding-right:10px;padding-left:10px;">
                                                      <b>Cliente: Paul Martinez</b>
                                                  </td>                                               
                                              </tr>
                                              <tr>
                                              <td
                                                  style="width: 50% !important;padding-top:5px;padding-bottom:5px;padding-right:10px;padding-left:10px;">
                                                  <b>Email: paulmartinez0912@gmail.com</b>
                                              </td>                                           
                                              </tr>
                                              <tr>
                                                  <td
                                                      style="width: 50% !important;padding-top:5px;padding-bottom:5px;padding-right:10px;padding-left:10px;">
                                                      <b>Teléfono: 0984958490</b>
                                                  </td>                                                
                                              </tr>
                                              <tr>
                                                  <td
                                                      style="width: 100% !important;padding-top:5px;padding-bottom:5px;padding-right:10px;padding-left:10px;">
                                                      <b>Productos: Jugos revitalizantes , jugos de piña , jugo de coco</b>
                                                  </td>
                                              </tr>                                             
                                          </table>
                                      </div>
                                  </td>
                              </tr>
                          </table>
                      </td>
                  </tr>
                  <tr class="white-back" style="background-color:#f7f7f7;">
                      <td class="one-column" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;">
                          <table width="100%" style="border-spacing:0;font-family:sans-serif;color:#3c3c3c;">
                              <tr>
                                  <td class="inner contents"
                                      style="padding-top:0px;padding-bottom:0px;padding-right:10px;padding-left:10px;width:100%;text-align:center;">
                                      <br>
                                      <br>
                                      <p class="h4 center grey"
                                          style="margin:0;color:#13683b;text-align:center;padding-top:10px;padding-bottom:10px;padding-right:10px;padding-left:10px;margin-top:0px !important;margin-bottom:0px !important;margin-right:0 !important;margin-left:0 !important;font-size:13.5px!important;line-height:1.5 !important;">
                                          Este mensaje ha sido generado automáticamente, por favor no respondas a este
                                          correo.
                                      </p>  
                                  </td>
                              </tr>
                          </table>
                      </td>
                  </tr>
                                   
                  <tr class="blue-back" style="background-color:#f7f7f7;">
                      <td class="one-column" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;">
                          <table width="100%" style="border-spacing:0;font-family:sans-serif;color:#333333;">
                              <tr>
                                  <td class="inner contents"
                                      style="padding-top:0px;padding-bottom:0px;padding-right:20px;padding-left:20px;width:100%;text-align:center;">
  
                                      <p class="h4 center grey"
                                          style="Margin:0;color:#13683b;text-align:center;padding-top:10px;padding-bottom:0px;padding-right:10px;padding-left:10px;margin-top:10px !important;margin-bottom:10px !important;margin-right:0 !important;margin-left:0 !important;font-size:10px!important;margin-bottom:10px;">
                                          Este correo electrónico fue enviado por Jugos Wambu<br>
                                          ©2022 Derechos Reservados
                                      <p>
  
                                  </td>
                              </tr>
                          </table>
                      </td>
                  </tr>
              </table>
          </div>
      </center>
  </body>
  
  </html>`,
    }
    transporter.sendMail(message).then(info => {
      res.status(200).send({ respuesta: info, tipo: 1 });
    }, error => {
      res.send({ respuesta: error, tipo: 0 });
    });
  },


  enviarEmailContacto: function (req, res) {
    const message = {
      from: "jugos.wambu@hotmail.com",
      to: "karlaeliz03@gmail.com",
      subject: req.body.asunto,
      html:      
                    "<body>"+
                        "<h2>Jugos Wambu</h2>"+
                        "<br><h3>Detalle del Mensaje</h3>"+
                        "<b>Nombre del Cliente: </b><span>" + req.body.nombre + "</span><br>"+
                        "<b>Correo del Cliente: </b><span>" + req.body.correo + "</span><br>"+
                        "<b>Mensaje del Cliente: </b><br><span>" + req.body.mensaje + "</span>"+
                    "</body>",
    }
    transporter.sendMail(message).then(info => {
      res.status(200).send({ respuesta: info, tipo: 1 });
    }, error => {
      res.send({ respuesta: error, tipo: 0 });
    });
  }, 
   

  }