////############################START Carousel CODE##################////////
    ///three functions>//start carousel//nextImg//imageCount//
    //Is the carousel running?
    let carRun = false;
    //is a setTimeOut() running?
    let timeOutRunning = false;
    //////////////////////////////////////////////////////////////////////////////
    ///IMGCOUNT FUNCTION START
    //get figures in the carousel section and return it
    let imageCount = () => {
        return document.getElementById('car').getElementsByTagName('figure');
    }
    //////IMGCOUNT FUNCTION END///////////////////////////////////////////////////

    //////NEXTIMG FUNCTION START/////////////////////////////////////////////////
    //This is the function called to show the next image 
    let nextImg = (car) => {
       //put figures from carousel section in firgure variable
        figures = imageCount(); 
        //witchToShow is keeping track of the image to show
        let witchToShow;
        //loop to set current displayed 
        for(let i = 0; i < figures.length; i++) {
            //if figure is part of the display class change it to none
            if (figures[i].className == "yvid"){
                //change it to none
                figures[i].className = 'hidden yvid';
                //give witchToShow
                witchToShow = i;
            }
        }
        //check if count is equal to amount of figures
        if(++witchToShow == figures.length){
          //if so reset count
            witchToShow = 0;
        }
        //change the next figure to display
        figures[witchToShow].className = 'yvid';
        //car is set and agument comming from the  start/stop button 
        //or another function
        //to see if the carousel is suppose to be running 
        if(car == true){
          //if carousel is suppose to run the use timeOutRunning variable to
          //show that we have started it.
            timeOutRunning = true;
            //setTimeOut run the startCarousel function with the nifunc
            //argument but before that set timOutRunning to false so we know 
            //there is no longer a pending instance of it running, 6000 nano //seconds.  
            setTimeout(
              //create anoumous variable to have else run in to aviod an error
                (() => {
                    timeOutRunning = false; 
                    startCarousel('nifunc');  
            }), 6000);
        }
    }
    /////NEXTIMG FUNCTION END//////////////////////////////////////////////

    ////startCarousel FUNCTION START//////////////////////////////////////
    //this is the function to start the carousel and collect data about 
    //where it is coming from using the a argument
    let startCarousel = (fromWhere) => {
      //get the start/stop carousel button information 
      let buttonText = document.getElementById('startCarouselButton');
        //if the cutton says start carousel and it is from the start carousel
        //button called this function then running this
        if(buttonText.innerHTML == "Start Carousel" && fromWhere == "scbutton"){
            //start the carRun carousel run boolean to true
            carRun = true;
            //change the text of the button to stop carousel
            buttonText.innerHTML = "Stop Carousel";
        ///do the oposite than was run above    
        } else if (buttonText.innerHTML == "Stop Carousel" && fromWhere == "scbutton"){
            buttonText.innerHTML = "Start Carousel";
            carRun = false;
        } 
        ///if carRun is true AND a setTimeout is not running
        //then call nextImg function
        if(carRun == true && timeOutRunning == false){
            nextImg(true);
        }
        
    }
    ///END startCarousel FUNCTION///////////////////////////////////////////////
    //########################END Carousel CODE#############################////