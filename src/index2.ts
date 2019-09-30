import csv from 'fast-csv';
import fs from 'fs';

(async () => {
  try {
    const result = await new Promise((resolve) => {
      console.log("starting!"); //this fires

      try {
        fs.createReadStream("c:\\this\\does\\not\\exist.csv")
          .pipe(csv.parse({ headers: false }))
          //.pipe(csv())
          // .on('data', e => {
          //   console.log("got some data!");
          // })
          ;
      } catch (e) {
        console.log("exception!"); //never fires
      }

    });
    console.log("result", result); //never fires
  } catch (e) {
    console.log("Exception2"); //never fires
  }
})();
