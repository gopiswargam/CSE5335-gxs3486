<!DOCTYPE html>
<html>
  <head>
    <title>my page</title>
    <style>

      table{
        border-collapse: collapse;
        border:1px solid black;
      }
      td,tr{
        border:1px solid black;
      }
    </style>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script>
      var i=0;
       function getData() {
           var interval = setInterval(doit,1000);
           function doit() {
               if(parseInt(i)==98){clearInterval(interval);}

               i++;
               var details="";
               console.log(i);
               $.get("https://cse5335-gxs3486-2.herokuapp.com/getData/"+i,{},function(response){
                  console.log(response.id);
				  // var data = JSON.parse(response);
				   //var address = data.address;
                   //var id = data.id;
                   //var name =  data.name;
                   //alert(response.id);
                   //details ="<tr><td>"+address+"</td><td>"+id+"</td><td>"+name+"</td><td></tr>";
                   //$("#tdata").html( $("#tdata").html()+details);
               });

           }

       }


    </script>
    <!--<link rel='stylesheet' href='/stylesheets/style.css' />-->
  </head>
  <body onload="getData()">

  <p>Welcome to my page</p>
      <table style="">
        <thead>
        <td>address</td>
        <td>id</td>
        <td>name</td>
        </thead>
        <tbody id="tdata"></tbody>
      </table>


  </body>
</html>