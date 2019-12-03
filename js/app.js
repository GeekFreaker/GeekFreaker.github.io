$(document).ready(function(){
  // console.log("hello World");
  var x;// surface area x
  var y;// surface area y

  var a;// origin of rover x
  var b;// origin of rover y

  var c = 1;//rover directions [n:1,e:2,s:3,s:4]

  var invalidChars = [
    "-","+","e",
  ];

  var SurfaceArea = [];
  var CoOrdinateTries = 0;
  var MotionArray = [];

  // please enter the to surface area size
  $('#popup-close').on('click',function(){
    x = $('#x_val').val();
    y = $('#y_val').val();

    $('#x_val').on("input", function() {
      this.value = this.value.replace(/[e\+\-]/gi, "");
    });

    $('#y_val').on("input", function() {
      this.value = this.value.replace(/[e\+\-]/gi, "");
    });

    $('#y_val').on("keydown", function(e) {
      if (invalidChars.includes(e.key)) {
        e.preventDefault();
      }
    });

    $('#y_val').on("keydown", function(e) {
      if (invalidChars.includes(e.key)) {
        e.preventDefault();
      }
    });

    console.log(x,y);

    if ((x!== 0 && x !== null) || (y!== 0 && y !== null)) {
      InitSurfaceArea(SurfaceArea,x,y);
      console.log("Surface Area",SurfaceArea);
      // display the surface area
      framePrint(SurfaceArea,x,y);
      // open up the second pop-up for the rover init
    } else {
      alert("This surface area is not valid...reloading");
      location.reload();
      // reload page
    }
  });

  $('#area').on('click',function(){
    $("#popup2").toggle("show");
  });

  $('#popup-close2').on('click',function(){
    $("#popup2").toggle("hide");
    SecondPopUp(SurfaceArea);
  });

//default direction is 1 North
  $(document).keypress(function(e) {
    switch (e.key) {
        case 'L':
         if(c==1){
            c = 4;
          }
         else if (c >= 1) {
           c = c--;
         }
          TurnLeft(array,a,b,c);
        break;
        case 'R':
        if(c==1){
           c = c--;
         }
        else if (c <= 1) {
          c = 1;
        }TurnRight(array,a,b,c);
          break;
        case 'M':
            MoveRoverForward(array,a,b,MotionArray);
          break;
    }
  });

  // functions
  function TurnLeft(array,a,b,c){//1,2,3,4
    console.log("Turn Left");
    // framePrintTurn(array,rows, columns, a, b, c);
  }

  function TurnRight(array,a,b,c){//1,2,3,4
    console.log("Turn Right")
    // framePrintTurn(array,rows, columns, a, b, c);
  }

  function MoveRoverForward(array,a,b,m){//capture previous block.
    //m.push(a,b,c);
    console.log("Move forward");
    // framePrintMotion(array,rows, columns, a, b, c);
  }

  function InitSurfaceArea(array, rows, columns){
    for (var i = 0; i < rows; i++) {
        array.push([0])
        for (var j = 0; j < columns; j++) {
            array[i][j] = 0;
        }
    }
  }

  function framePrint(array,rows, columns){
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < columns; j++) {
          $('#area').append(array[i][j]+ ". ");
        }
        $('#area').append('<br/>');
       }
    }

  function framePrintExtra(array,rows, columns, a, b){
      //show the content in the array
      // framePrint(array,row,columns);
      for (var i = 0; i < rows; i++) {
          for (var j = 0; j < columns; j++) {
            if(a==i && b==j){
             array[i][j] = 1;
            }
            $('#area').append(array[i][j]+ ". ");
          }
          $('#area').append('<br/>');
         }
  }

  function framePrintTurn(array,rows, columns, a, b, c){
      //show the content in the array
      // framePrint(array,row,columns);
      for (var i = 0; i < rows; i++) {
          for (var j = 0; j < columns; j++) {
            if(a==i && b==j){
             array[i][j] = c;
            }
            $('#area').append(array[i][j]+ ". ");
          }
          $('#area').append('<br/>');
         }
  }

  function SecondPopUp(array) {
    // get the starting position of the Rover
    a = $('#a_val').val();
    // console.log(a,b);
    b = $('#b_val').val();

    $('#a_val').on("input", function() {
      this.value = this.value.replace(/[e\+\-]/gi, "");
    });

    $('#b_val').on("input", function() {
      this.value = this.value.replace(/[e\+\-]/gi, "");
    });

    $('#a_val').on("keydown", function(e) {
      if (invalidChars.includes(e.key)) {
        e.preventDefault();
      }
    });

    $('#b_val').on("keydown", function(e) {
      if (invalidChars.includes(e.key)) {
        e.preventDefault();
      }
    });

    // also ensure that both values are avaiable in the
    // current matrix set the start with a number 1.
    var co_ord = [a,b];
    if(isCordinateInArray(array, co_ord)) {
      $('#area').html(" ");
      InitSurfaceArea(array,x,y);
      $('#area').html(" ");
      framePrintExtra(array,x,y,a,b);
    } else {
      // ask again for the surface area co-ordinates
      alert("This co-ordinate pair doesn't exist on the surface area.");
      location.reload();
      }
    }

  function isCordinateInArray(array, item) {
        for (var i = 0; i < array.length; i++) {
            if (typeof array[i][item[0]] !== 'undefined' &&
             typeof array[i][item[1]] !== 'undefined')
             {
                return true;
             }
        }
        return false;
    }

  function TurnRover(){
    switch (expression) {
      case 'M':
      // logic to move the rover
      // forward one value in the direction
      break;

      case 'L':
      // logic to turn the rover LEFT one square
      break;

      case 'R':
      // logic to turn the rover RIGHT in current square
      break;
    }
  }

  //finlaize
  function SimulationOfMotion() {
    //logic to simulate an entire sequence of motion events
     return true;
  }

  //finalize
  function TransistionRover(data){
    //logic to send the content to HQ [ajax query]
    // $.ajax('/jquery/getjsondata',
    // {
    //   dataType: 'json',
    //   success: function (data,stat,xhr) {
    //     alert("Data Sent to HQ:" stat+' '+data);
    //   },
    //   error: function (jqXhr, textStat, errMsg) {
    //     alert("Data NOT Sent to HQ:"+errMsg);
    //   }
    // });
  }

});
