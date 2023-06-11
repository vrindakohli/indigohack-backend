/*
 * Copyright (c) 2012-2019 Red Hat, Inc.
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 * Contributors:
 *   Red Hat, Inc. - initial API and implementation
 */

/*eslint-env node*/

var express = require('express');
var app = express();
var dbConn=require('./db')

app.get("/userDetails/:id", function (req, res) {
  // res
  //   .send({ message: "succesfull",
  //     Itenary: "Q1BHL6",
  //     Origin: "Dehi",
  //     Destination: "Mumbai",
  //     DepOn: "17-03-2023",
  //     RetOn: "",
  //     BookedOn: "10-03-2023",
  //   })
  //   .catch((err) => {
  //     res.send("error ", err);
  //   });

  dbConn.query('select itenary, origin, destination, depOn, retOn, bookedOn from USERDETAILS', function(err){
    if(err){
      res.send("error! Something went wrong");

    }
    else{
      res.send('USERDETAILS', {data:rows})
    }
  })

  
});

app.post("/userDetails", function (req, res) {
  const body = req.body;
  const{itenary, origin, destination, depOn, bookedOn}=body;
  // res.send({message:"Succesfully added",body})
  // .catch((err) => {
  //   res.send("error ", err);
  // });;

  
  dbConn.query('insert into USERDETAILS (itenary, origin, destination, depOn, bookedOn) VALUES (?, ?, ?, ?, ?)',itenary, origin, destination, depOn, bookedOn,function(err){
    if(err){
      res.send("error! Something went wrong");
    }
    else{
      res.send('user added succesfully')
    }})
});

app.put("/userDetails/:id", function (req, res) {
  const id = req.params.id;
  const body = req.body;
  const{itenary, origin, destination, depOn, bookedOn}=body;

  // res.send({message:"Succesfully editted",id, body})
  // .catch((err) => {
  //   res.send("error ", err);
  // });;
  dbConn.query('update USERDETAILS set itenary=?, origin=?, destination=?, depOn=?, bookedOn=? where id=?',itenary, origin, destination, depOn, bookedOn, id,function(err){
    if(err){
      res.send("error! Something went wrong");
    }
    else{
      res.send('user updated succesfully')
    }})
});

app.delete("/userDetails/:id", function (req, res) {
    const id = req.params.id;
    // const body = req.body;
    // res.send({message:"Succesfully deleted",id, body})
    // .catch((err) => {
    //     res.send("error ", err);
    //   });;
    dbConn.query('delete from USERDETAILS where id=?', id,function(err){
      if(err){
        res.send("error! Something went wrong");
      }
      else{
        res.send('user deleted succesfully')
      }})
  });


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
