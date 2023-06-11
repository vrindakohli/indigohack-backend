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

app.get("/userDetails/:id", function (req, res) {
  res
    .send({ message: "succesfull",
      Itenary: "Q1BHL6",
      Origin: "Dehi",
      Destination: "Mumbai",
      DepOn: "17-03-2023",
      RetOn: "",
      BookedOn: "10-03-2023",
    })
    .catch((err) => {
      res.send("error ", err);
    });
});

app.post("/userDetails", function (req, res) {
  const body = req.body;
  res.send({message:"Succesfully added",body})
  .catch((err) => {
    res.send("error ", err);
  });;
});

app.put("/userDetails/:id", function (req, res) {
  const id = req.params.id;
  const body = req.body;
  res.send({message:"Succesfully editted",id, body})
  .catch((err) => {
    res.send("error ", err);
  });;
});

app.delete("/userDetails/:id", function (req, res) {
    const id = req.params.id;
    const body = req.body;
    res.send({message:"Succesfully deleted",id, body})
    .catch((err) => {
        res.send("error ", err);
      });;
  });


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
