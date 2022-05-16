const express = require("express");
const app = express();
const Connection = require("mysql/lib/Connection");
const db = require("./db");
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.get("/mylist", (req, res) => {
  let qr = "select * from mylist";
  db.query(qr, (err, result) => {
    res.send(result);
  });
});
app.get("/mylist/:id", (req, res) => {
  let NInv = req.params.id;
  let qr = `select * from mylist where NInv= ${NInv} `;
  db.query(qr, (err, result) => {
    res.send(result);
  });
});



//
app.get("/service", async(req, res) => {
  // let idservice = req.params.id;
    let qr = `select nomservice from service`;
    // const requete =  db.query(qr, (err, result) => {
    //   return result
    // });
    // res.send( await requete);

    const getAllService = new Promise((resolve, reject)=>{
      db.query(qr, (err, result) => {
        if(err){
          reject(err)
        }
        resolve(result)
      })
    })

    res.send(await getAllService)
   
});





app.post("/mylist", (req, res) => {
  console.log(req.body);
  let Famille = req.body.Famille;

  let Nom = req.body.Nom;
  let Marque = req.body.Marque;
  let Modele = req.body.Modele;
  let Nserie = req.body.Nserie;
  let Fournisseur = req.body.Fournisseur;
  let Mser = req.body.Mser;
  let Modacq = req.body.Modacq;
  let Origine = req.body.Origine;
  let service= req.body.service
  let qr = `INSERT INTO mylist ( Famille, Nom, Marque, Modele, Nserie, Fournisseur, Mser, Modacq, Origine,service ) 
    VALUES ('${Famille}','${Nom}','${Marque}','${Modele}','${Nserie}',
    '${Fournisseur}','${Mser}','${Modacq}','${Origine}','${service})`;
  db.query(qr, (err, result) => {
    res.send(result);
  });
});
//patch
// put
app.put("/mylist/:NInv", (req, res) => {
  let NInv = req.params.NInv;

  console.log(req.body);
  let Famille = req.body.Famille;
  let Nom = req.body.Nom;
  let Marque = req.body.Marque;
  let Modele = req.body.Modele;
  let Nserie = req.body.Nserie;
  let Fournisseur = req.body.Fournisseur;
  let Mser = req.body.Mser;
  let Modacq = req.body.Modacq;
  let Origine = req.body.Origine;
  let service=req.body.service
  let qr = `UPDATE mylist SET  Famille='${Famille}',
                              Nom='${Nom}',
                              Marque='${Marque}',
                              Modele='${Modele}',
                              Nserie=${Nserie},
                              Fournisseur='${Fournisseur}',
                              Mser='${Mser}',
                              Modacq='${Modacq}',
                              Origine='${Origine}'
                              service='${service}'
                               WHERE NInv= ${NInv}`;
  const example = db.query(qr, (err, result) => {
    if(result){
      console.log(result);
    }
    console.log(err);
  });
  res.send(example);
});
app.delete("/mylist/:id", (req, res) => {
  let NInv = req.params.id;
  let qr = `DELETE FROM mylist where NInv= ${NInv} `;
  db.query(qr, (err, result) => {
    res.send(result);
  });
});

port = 3000;
app.listen(port);