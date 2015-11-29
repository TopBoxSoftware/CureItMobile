/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */


if(localStorage.getItem("first_time") != "true")
{
    localStorage.setItem("first_time", "true");
    localStorage.setItem("coming_from", "nothing");
    
    localStorage.setItem("blue1", "false");
localStorage.setItem("blue2", "false");
localStorage.setItem("blue3", "false");
localStorage.setItem("blue4", "false");

localStorage.setItem("green1", "false");
localStorage.setItem("green2", "false");
localStorage.setItem("green3", "false");
localStorage.setItem("green4", "false");

localStorage.setItem("red1", "false");
localStorage.setItem("red2", "false");
localStorage.setItem("red3", "false");
localStorage.setItem("red4", "false");


localStorage.setItem("BCAN_ACTIVE", "false");
localStorage.setItem("BCC_ACTIVE", "false");

localStorage.setItem("LLS_ACTIVE", "false");
localStorage.setItem("LLR_ACTIVE", "false");

localStorage.setItem("BCRT_ACTIVE", "false");
localStorage.setItem("TSF_ACTIVE", "false");

localStorage.setItem("ABTA_ACTIVE", "false");
localStorage.setItem("NBTS_ACTIVE", "false");

localStorage.setItem("NBCF_ACTIVE", "false");
localStorage.setItem("BCRF_ACTIVE", "false");

localStorage.setItem("FCC_ACTIVE", "false");
localStorage.setItem("NCCRA_ACTIVE", "false");

localStorage.setItem("FWC_ACTIVE", "false");
localStorage.setItem("MKF_ACTIVE", "false");

localStorage.setItem("ETRF_ACTIVE", "false");
localStorage.setItem("ECF_ACTIVE", "false");

localStorage.setItem("FFLR_ACTIVE", "false");
localStorage.setItem("LCRF_ACTIVE", "false");

localStorage.setItem("HLF_ACTIVE", "false");
localStorage.setItem("LCFA_ACTIVE", "false");

localStorage.setItem("LRF_ACTIVE", "false");
localStorage.setItem("LFA_ACTIVE", "false");

localStorage.setItem("OCF_ACTIVE", "false");
localStorage.setItem("MCF_ACTIVE", "false");

localStorage.setItem("OCRF_ACTIVE", "false");
localStorage.setItem("NOCC_ACTIVE", "false");

localStorage.setItem("LF_ACTIVE", "false");
localStorage.setItem("PCAN_ACTIVE", "false");

localStorage.setItem("SCF_ACTIVE", "false");
localStorage.setItem("ASA_ACTIVE", "false");

localStorage.setItem("TCS_ACTIVE", "false");
localStorage.setItem("TCAF_ACTIVE", "false");

localStorage.setItem("TCS_ACTIVE", "false");
localStorage.setItem("TCAF_ACTIVE", "false");

localStorage.setItem("TCSA_ACTIVE", "false");
localStorage.setItem("LOLF_ACTIVE", "false");

localStorage.setItem("desktop_ACTIVE", "false");
localStorage.setItem("twitter_ACTIVE", "false");


}

  
//Copy and paste this into the top function before deployment


//End copy and paste


var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

/* Chart Data */

var pieDataBladder = [
                      {
                      value: 24,
                      color: "#46BFBD",
                      highlight: "#5AD3D1",
                      label: "Percentage of Diagnoses - Females"
                      },
                      {
                      value: 76,
                      color:"#F7464A",
                      highlight: "#FF5A5E",
                      label: "Percentage of Diagnoses - Males"
                      }
                      
                      
                      ];


/* End Chart Data */

var menu_triggered = false;
var firstNumber;
var secondNumber;
var thirdNumber;

function grow_circle()
{
    document.getElementById("tiny_circle").className = "expand";
}

function sendUserBack()
{
	window.history.back();
}

function submit_data(input)
{
    localStorage.setItem("coming_from", "first_screen");
    
    if(input != "" && input != " " && input.length > 1)
    {
        localStorage.setItem("user_name", input);
        //alert(localStorage.getItem("user_name"));
        document.getElementById("full_wrapper").className = "animated fadeOutDown";
        setInterval(function () {window.location = "start_page.html";}, 1300);
    }
    else
    {
        document.getElementById("text_enter_above").className = "abs_center animated bounce";
        document.getElementById("input_box").className = "abs_center animated bounce";
        document.getElementById("input_box").placeholder = "Enter Your Name!";
        setInterval(function () {document.getElementById("input_box").className = "abs_center";}, 3000);
        setInterval(function () {document.getElementById("text_enter_above").className = "abs_center";}, 3000);
    }
}

function leave_diseases()
{
    swiper.slideTo(0, 1000);
    document.body.style.backgroundColor = "#38CA8B";
    setInterval(function () {document.getElementById("full_wrapper_complete").className = "animated fadeOutDown";
}, 1010);
    setInterval(function () {window.location = "start_page.html";}, 2200);
}

function init_diseases(value)
{
	if(value == "resource")
	{
		 setTimeout(function(){document.getElementById("whole_body").style.opacity = 0;document.getElementById("whole_body").style.zIndex = 0;}, 0);
        
	}
	
    if(value.indexOf("donation_card") == -1)
    {
        setTimeout(function(){document.getElementById("whole_body").style.opacity = 0;document.getElementById("whole_body").style.zIndex = 0;}, 10);
        document.getElementById("full_wrapper_complete").className = "animated zoomIn freeze_body";
    }else
    {
        setTimeout(function(){document.getElementById("whole_body").style.opacity = 0;document.getElementById("whole_body").style.zIndex = 0;}, 0);
        
        if(value.indexOf("one") != -1)
        {
            init_donation_card();
        }
        
        if(value.indexOf("two") != -1)
        {
            
            init_donation_card_two();
        }
        
        if(value.indexOf("three") != -1)
        {
            init_donation_card_three();
        }
        
        if(value.indexOf("four") != -1)
        {
            init_donation_card_four();
        }
    }
    
    
    
    
    
    //setTimeout(function(){setTimeoutdocument.getElementById("full_wrapper_complete").className = "animated zoomIn freeze_body";}, 100);

    
    if(localStorage.getItem("coming_from") == "first_screen")
    {
        setTimeout(function(){document.getElementById("full_wrapper_complete").className = "change_red freeze_body"}, 880);
       
    }
    
    document.getElementById("head").className = "fill_white";
    
    if(localStorage.getItem("coming_from") == "first_screen")
    {
        setTimeout(function(){document.getElementById("full_wrapper_complete").className = "change_red"}, 1390);
    }
    
    if(localStorage.getItem("coming_from") == "disease_page")
    {
        setTimeout(function(){document.getElementById("full_wrapper_complete").className = "change_orange freeze_body"}, 880);
    }
    
    if(localStorage.getItem("coming_from") == "disease_page")
    {
        setTimeout(function(){document.getElementById("full_wrapper_complete").className = "change_orange"}, 1390);
    }
    
   initFastButtons();
}

function init_bladder()
{
    if(localStorage.getItem("coming_from") == "disease_page")
    {
        //setTimeout(function(){document.getElementById("the_body").className = "change_orange freeze_body"}, 880);
    }
}

function eval_badge(value)
{
		//In order to be more efficient, the function first checks what color badge it will be looking at.
		
	if(value.indexOf("blue") > -1)
	{
		if(value == "blue1")
		{
			if(localStorage.getItem("blue1") == "false")
			{
				swal({   title: "Keep Learning!",  text: "Try checking out some disease pages!",   imageUrl: "question_blue.png" });
			}
		}
		
		if(value == "blue2")
		{
			if(localStorage.getItem("blue2") == "false")
			{
				swal({   title: "Keep Learning!",  text: "Try checking out some disease pages!",   imageUrl: "question_blue.png" });
			}
		}
		
		if(value == "blue3")
		{
			if(localStorage.getItem("blue3") == "false")
			{
				swal({   title: "Keep Learning!",  text: "Try checking out some disease pages!",   imageUrl: "question_blue.png" });
			}
		}
		
		if(value == "blue4")
		{
			if(localStorage.getItem("blue4") == "false")
			{
				swal({   title: "Keep Learning!",  text: "Try checking out some disease pages!",   imageUrl: "question_blue.png" });
			}
		}
	}

		if(value.indexOf("green") > -1)
		{
			if(value == "green1")
			{
				if(localStorage.getItem("green1") == "false")
				{
					swal({   title: "Keep Learning!",  text: "Try exploring out some charities!",   imageUrl: "question_green.png" });
				}
			}
			
			if(value == "green2")
			{
				if(localStorage.getItem("green2") == "false")
				{
					swal({   title: "Keep Learning!",  text: "Try exploring out some charities!",   imageUrl: "question_green.png" });
				}
			}
			
			if(value == "green3")
			{
				if(localStorage.getItem("green3") == "false")
				{
					swal({   title: "Keep Learning!",  text: "Try exploring out some charities!",   imageUrl: "question_green.png" });
				}
			}
			
			if(value == "green4")
			{
				if(localStorage.getItem("green4") == "false")
				{
					swal({   title: "Keep Learning!",  text: "Try exploring out some charities!",   imageUrl: "question_green.png" });
				}
			}
		}	
		
		if(value.indexOf("red") > -1)
		{
			if(value == "red1")
			{
				if(localStorage.getItem("red1") == "false")
				{
					swal({   title: "Keep Learning!",  text: "Try using the explore page!",   imageUrl: "question_red.png" });
				}
			}
			
			if(value == "red2")
			{
				if(localStorage.getItem("red2") == "false")
				{
					swal({   title: "Keep Learning!",  text: "Try using the explore page!",   imageUrl: "question_red.png" });
				}
			}
			
			if(value == "red3")
			{
				if(localStorage.getItem("red3") == "false")
				{
					swal({   title: "Keep Learning!",  text: "Try using the explore page!",   imageUrl: "question_red.png" });
				}
			}
			
			if(value == "red4")
			{
				if(localStorage.getItem("red4") == "false")
				{
					swal({   title: "Keep Learning!",  text: "Try using the explore page!",   imageUrl: "question_red.png" });
				}
			}
		}	
}

function init_disease_page(value)
{
    setTimeout(function(){document.getElementById("whole_body").style.opacity = 0;document.getElementById("whole_body").style.zIndex = 0;}, 10);
    //document.getElementById("full_wrapper_complete").className = "animated zoomIn freeze_body";
    
	if(value != "explore")
	{
		document.getElementById("disease_header").className = "fill_white";
    }
	
	if(value != "explore")
	{
		if(localStorage.getItem("coming_from") == "disease_page")
		{
			setTimeout(function(){document.getElementById("full_wrapper_complete").className = "change_orange"}, 880);
		}
	}
	
	if(value == "explore")
	{
		//Set up explore page here
		
		//Testing values: 
		//firstNumber = 3;
		//secondNumber = 3;
		//thirdNumber = 3;
		
		//Actual values (Randomly generated between 1 and 3)
		firstNumber = Math.floor((Math.random() * 3) + 1);
		secondNumber = Math.floor((Math.random() * 3) + 1);
		thirdNumber = Math.floor((Math.random() * 3) + 1);
		
		
		if(firstNumber == 2)
		{
			document.getElementById("box1").innerHTML = "My Profile";
			document.getElementById("box4").innerHTML = "Testicular";
			document.getElementById("box7").innerHTML = "Bone Cancer";
			document.getElementById("box10").innerHTML = "Colorectal";
			document.getElementById("box13").innerHTML = "Lymphatic";
			document.getElementById("box16").innerHTML = "Allie's Story";
			document.getElementById("box19").innerHTML = "Jay's Story";
			document.getElementById("box22").innerHTML = "Pancreatic";
			document.getElementById("box25").innerHTML = "Thyroid";
		}
		
		if(secondNumber == 2)
		{
			document.getElementById("box2").innerHTML = "SERO";
			document.getElementById("box5").innerHTML = "Lung";
			document.getElementById("box8").innerHTML = "Liver";
			document.getElementById("box11").innerHTML = "Brain";
			document.getElementById("box14").innerHTML = "Lisa's Story";
			document.getElementById("box17").innerHTML = "Email Allie";
			document.getElementById("box20").innerHTML = "Christina's Story";
			document.getElementById("box23").innerHTML = "Skin";
			document.getElementById("box26").innerHTML = "Endometrial";
			
		}
		
		if(thirdNumber == 2)
		{
			document.getElementById("box3").innerHTML = "Endometrial";
			document.getElementById("box6").innerHTML = "Thyroid";
			document.getElementById("box9").innerHTML = "American Cancer Society";
			document.getElementById("box12").innerHTML = "Pancreatic";
			document.getElementById("box15").innerHTML = "Skin";
			document.getElementById("box18").innerHTML = "Nation Cancer Institute";
			document.getElementById("box21").innerHTML = "Shobi's Story";
			document.getElementById("box24").innerHTML = "Lung Cancer";
		}
		
		if(firstNumber == 3)
		{
			document.getElementById("box1").innerHTML = "JCR";
			document.getElementById("box4").innerHTML = "Liver";
			document.getElementById("box7").innerHTML = "Eye Cancer";
			document.getElementById("box10").innerHTML = "Reddit";
			document.getElementById("box13").innerHTML = "Testicular";
			document.getElementById("box16").innerHTML = "Komi's Story";
			document.getElementById("box19").innerHTML = "Resources";
			document.getElementById("box22").innerHTML = "Group Loop";
			document.getElementById("box25").innerHTML = "Help Guide";
		}
		
		if(secondNumber == 3)
		{
			document.getElementById("box2").innerHTML = "Pancreatic";
			document.getElementById("box5").innerHTML = "CCRF";
			document.getElementById("box8").innerHTML = "Bone";
			document.getElementById("box11").innerHTML = "Chemocare";
			document.getElementById("box14").innerHTML = "Breast Cancer";
			document.getElementById("box17").innerHTML = "CSC";
			document.getElementById("box20").innerHTML = "Bladder Cancer";
			document.getElementById("box23").innerHTML = "RHCCC";
			document.getElementById("box26").innerHTML = "Komi's Story";
		}
		
		if(thirdNumber == 3)
		{
			document.getElementById("box3").innerHTML = "Endometrial";
			document.getElementById("box6").innerHTML = "Shobi's Story";
			document.getElementById("box9").innerHTML = "Choose Hope";
			document.getElementById("box12").innerHTML = "Ovarian";
			document.getElementById("box15").innerHTML = "Lisa";
			document.getElementById("box18").innerHTML = "Christina's Story";
			document.getElementById("box21").innerHTML = "F Cancer";
			document.getElementById("box24").innerHTML = "Web MD";
		}

		
	}
		
	document.getElementById("fastclick").style.opacity = 0.88;
}

function checkLink(value)
{
	
	if(thirdNumber == 3)
	{
		if(value == "box3")
		{
			window.location = "endometrialCancer.html";
		}
		
		if(value == "box6")
		{
			window.location = "shobi_story.html";
		}
		
		if(value == "box9")
		{
			window.location = "chooseHope.html";
		}
		
		if(value == "box12")
		{
			window.location = "ovarianCancer.html";
		}
		
		if(value == "box15")
		{
			window.location = "lisa_story.html";
		}
		
		if(value == "box18")
		{
			window.location = "christina_story.html";
		}
		
		if(value == "box21")
		{
			window.location = "fcancer.html";
		}
		
		if(value == "box24")
		{
			window.location = "WEBMD1.html";
		}
	}
	
	if(secondNumber == 3)
	{
			if(value == "box2")
			{
				window.location = "pancreaticCancer.html";
			}
			
			if(value == "box5")
			{
				window.location = "ccrf.html";
			}
			
			if(value == "box8")
			{
				window.location = "boneCancer.html";
			}
			
			if(value == "box11")
			{
				window.location = "chemocare1.html";
			}
			
			if(value == "box14")
			{
				window.location = "breastCancer.html";
			}
			
			if(value == "box17")
			{
				window.location = "csc1.html";
			}
			
			if(value == "box20")
			{
				window.location = "bladderCancer.html";
			}
			
			if(value == "box23")
			{
				window.location = "rhccc.html";
			}
			
			if(value == "box26")
			{
				window.location = "komi_story.html";
			}
	}
	
	if(firstNumber == 3)
	{
		if(value == "box1")
		{
			window.location = "jcr1.html";
		}
		
		if(value == "box4")
		{
			window.location = "liverCancer.html";
		}
		
		if(value == "box7")
		{
			window.location = "eyeCancer.html";
		}
		
		if(value == "box10")
		{
			window.location = "reddit.html";
		}
		
		if(value == "box13")
		{
			window.location = "testicularCancer.html";
		}
		
		if(value == "box16")
		{
			window.location = "komi_story.html";
		}
		
		if(value == "box19")
		{
			window.location = "resources.html";
		}
		
		if(value == "box22")
		{
			window.location = "grouploop1.html";
		}
		
		if(value == "box25")
		{
			window.location = "helpguide.html";
		}
		
	}
	
	if(firstNumber == 1)
	{
		if(value == "box1")
		{
			window.location = "resources.html";
		}
		
		if(value == "box4")
		{
			window.location = "my_profile.html";
		}			
		
		if(value == "box7")
		{
			window.location = "testicularCancer.html";
		}
		
		if(value == "box10")
		{
			window.location = "breastCancer.html";
		}
		
		if(value == "box13")
		{
			window.location = "eyeCancer.html";
		}
		
		if(value == "box16")
		{
			window.location = "lungCancer.html";
		}
		
		if(value == "box19")
		{
			window.location = "lisa_story.html";
		}
		
		if(value == "box22")
		{
			window.location = "skinCancer.html";
		}
		
		if(value == "box25")
		{
			window.location = "liverCancer.html";
		}
		/*
		if(value == "box25")
		{
			 window.location.href = "mailto:topboxsoftware@gmail.com?subject=I'm interested in sharing my story!&body=1) My name is: [Your name here]%0D%0A%0D%0A2) I can be contacted at: [Your email address here]%0D%0A%0D%0A3) I am a [Your involvement with cancer as a patient or observer]%0D%0A%0D%0ANote from Topbox Software:%0D%0AThanks for emailing us. We'll get back to you as soon as we can!";
			 }
		*/
	}
	
	if(secondNumber == 1)
	{
		if(value == "box2")
		{
			window.location = "bladderCancer.html";
		}
		
		if(value == "box5")
		{
			window.location = "donationCards.html";
		}
		
		if(value == "box8")
		{
			window.location = "stories_page.html";
		}
		
		if(value == "box11")
		{
			window.location = "allie_story.html";
		}
		
		if(value == "box14")
		{
			window.location = "bloodCancer.html";
		}
		
		if(value == "box17")
		{
			window.location = "jake_story.html";
		}
		
		if(value == "box20")
		{
			window.location = "oralCancer.html";
		}
		
		if(value == "box23")
		{
			window.location = "ovarianCancer.html";
		}
		
		if(value == "box26")
		{
			window.location = "christina_story.html";
		}
	}
	
	if(thirdNumber == 1)
	{
		if(value == "box3")
		{
			window.location = "brainCancer.html";
		}
		
		if(value == "box6")
		{
			window.location = "komi_story.html";
		}
		
		if(value == "box9")
		{
			window.location = "brainCancer.html";
		}
		
		if(value == "box12")
		{
			window.location = "jay_story.html";
		}
		
		if(value == "box15")
		{
			//Random page
			var rand = Math.floor((Math.random() * 10) + 1);
			
			if(rand == 1)
			{
				window.location = "bloodCancer.html";
			}else if(rand == 2)
			{
				window.location = "skinCancer.html";
			}else if(rand == 3)
			{
				window.location = "thyroidCancer.html";
			}else if(rand == 4)
			{
				window.location = "endometrialCancer.html";
			}else if(rand == 5)
			{
				window.location = "lungCancer.html";
			}else if(rand == 6)
			{
				window.location = "liverCancer.html";
			}else if(rand == 7)
			{
				window.location = "ovarianCancer.html";
			}else if(rand == 8)
			{
				window.location = "brainCancer.html";
			}else if(rand == 9)
			{
				window.location = "breastCancer.html";
			}else if(rand == 10)
			{
				window.location = "oralCancer.html";
			}
			
		}
		
		if(value == "box18")
		{
			window.location = "endometrialCancer.html";
		}
		
		if(value == "box21")
		{
			window.location = "shobi_story.html";
		}
		
		if(value == "box24")
		{
			window.location.href = "mailto:topboxsoftware@gmail.com?subject=I'm interested in sharing my story!&body=1) My name is: [Your name here]%0D%0A%0D%0A2) I can be contacted at: [Your email address here]%0D%0A%0D%0A3) I am a [Your involvement with cancer as a patient or observer]%0D%0A%0D%0ANote from Topbox Software:%0D%0AThanks for emailing us. We'll get back to you as soon as we can!";
		}
	}
	
	if(firstNumber == 2)
	{
		if(value == "box1")
		{
			window.location = "my_profile.html";
		}

		
		if(value == "box4")
		{
			window.location = "testicularCancer.html";
		}
		
		if(value == "box7")
		{
			window.location = "boneCancer.html";
		}
		
		if(value == "box10")
		{
			window.location = "colorectalCancer.html";
		}
		
		if(value == "box13")
		{
			window.location = "lymphaticCancer.html";
		}
		
		if(value == "box16")
		{
			window.location = "allie_story.html";
		}
		
		if(value == "box19")
		{
			window.location = "jay_story.html";
		}
		
		if(value == "box22")
		{
			window.location = "pancreaticCancer.html";
		}
		
		if(value == "box25")
		{
			window.location = "thyroidCancer.html";
		}
		
	}
	
	if(secondNumber == 2)
	{
		if(value == "box2")
		{
			window.location = "SERO1.html";
		}
		
		if(value == "box5")
		{
			window.location = "lungCancer.html";
		}
		
		if(value == "box8")
		{
			window.location = "liverCancer.html";
		}
		
		if(value == "box11")
		{
			window.location = "brainCancer.html";
		}
		
		if(value == "box14")
		{
			window.location = "lisa_story.html";
		}
		
		if(value == "box17")
		{
			window.location = "allie1.html";
		}
		
		if(value == "box20")
		{
			window.location = "christina_story.html";
		}
		
		if(value == "box23")
		{
			window.location = "skinCancer.html";
		}
		
		if(value == "box26")
		{
			window.location = "endometrialCancer.html";
		}
	}
	
		if(thirdNumber == 2)
		{
			if(value == "box3")
			{
				window.location = "endometrialCancer.html";
			}
			
			if(value == "box6")
			{
				window.location = "thyroidCancer.html";
			}
			
			if(value == "box9")
			{
				window.location = "acs1.html";
			}
			
			if(value == "box12")
			{
				window.location = "pancreaticCancer.html";
			}
			
			if(value == "box15")
			{
				window.location = "skinCancer.html";
			}
			
			if(value == "box18")
			{
				window.location = "nci1.html";
			}
			
			if(value == "box21")
			{
				window.location = "shobi_story.html";
			}
			
			if(value == "box24")
			{
				window.location = "lungCancer.html";
			}
			
		}
}

function init_other_page(value)
{
    
    if(value == "profile")
    {
        setup_profile();
    }
    
	setTimeout(function(){document.getElementById("whole_body").style.opacity = 0;document.getElementById("whole_body").style.zIndex = 0;}, 10);
    document.getElementById("full_wrapper_complete").className = "animated zoomIn freeze_body";
    
    document.getElementById("disease_header").className = "fill_white";
    
    
    if(localStorage.getItem("coming_from") == "disease_page")
    {
        setTimeout(function(){document.getElementById("full_wrapper_complete").className = "change_orange"}, 880);
    }
	
	document.getElementById("fastclick").style.opacity = 0.98;
    
}

function open_bladder_cancer()
{
    localStorage.setItem("coming_from", "disease_page");
	
	if(localStorage.getItem("bladder_visited") == "false")
	{
		var num = parseInt(localStorage.getItem("disease_pages_visited"));
		num++;
		num = num.toString();
		localStorage.setItem("disease_pages_visited", num);
		alert(localStorage.getItem("disease_pages_visited"));
	}
	
	localStorage.setItem("bladder_visited", "true");
	
    document.getElementById("the_body").className = "red_back"
    document.getElementById("full_wrapper_complete").className = "animated fadeOutDown red_back freeze_body";
    setTimeout(function(){window.location = "bladderCancer.html";}, 1000) 
}

function open_oral_cancer()
{
    localStorage.setItem("coming_from", "disease_page");
    document.getElementById("the_body").className = "red_back"
    document.getElementById("full_wrapper_complete").className = "animated fadeOutDown red_back freeze_body";
    setTimeout(function(){window.location = "oralCancer.html";}, 1000) 
}

function open_lymphatic_cancer()
{
    localStorage.setItem("coming_from", "disease_page");
    document.getElementById("the_body").className = "red_back"
    document.getElementById("full_wrapper_complete").className = "animated fadeOutDown red_back freeze_body";
    setTimeout(function(){window.location = "lymphaticCancer.html";}, 1000) 
}

function open_colo_cancer()
{
    localStorage.setItem("coming_from", "disease_page");
    document.getElementById("the_body").className = "red_back"
    document.getElementById("full_wrapper_complete").className = "animated fadeOutDown red_back freeze_body";
    setTimeout(function(){window.location = "colorectalCancer.html";}, 1000) 
}

function open_endo_cancer()
{
    localStorage.setItem("coming_from", "disease_page");
    document.getElementById("the_body").className = "red_back"
    document.getElementById("full_wrapper_complete").className = "animated fadeOutDown red_back freeze_body";
    setTimeout(function(){window.location = "endometrialCancer.html";}, 1000) 
}

function open_thyroid_cancer()
{
    localStorage.setItem("coming_from", "disease_page");
    document.getElementById("the_body").className = "red_back"
    document.getElementById("full_wrapper_complete").className = "animated fadeOutDown red_back freeze_body";
    setTimeout(function(){window.location = "thyroidCancer.html";}, 1000) 
}

function open_testicular_cancer()
{
	localStorage.setItem("coming_from", "disease_page");
    document.getElementById("the_body").className = "red_back"
    document.getElementById("full_wrapper_complete").className = "animated fadeOutDown red_back freeze_body";
    setTimeout(function(){window.location = "testicularCancer.html";}, 1000) 
}

function open_skin_cancer()
{
    localStorage.setItem("coming_from", "disease_page");
    document.getElementById("the_body").className = "red_back"
    document.getElementById("full_wrapper_complete").className = "animated fadeOutDown red_back freeze_body";
    setTimeout(function(){window.location = "skinCancer.html";}, 1000) 
}

function open_liver_cancer()
{
    localStorage.setItem("coming_from", "disease_page");
    document.getElementById("the_body").className = "red_back"
    document.getElementById("full_wrapper_complete").className = "animated fadeOutDown red_back freeze_body";
    setTimeout(function(){window.location = "liverCancer.html";}, 1000) 
}

function open_lung_cancer()
{
    localStorage.setItem("coming_from", "disease_page");
    document.getElementById("the_body").className = "red_back"
    document.getElementById("full_wrapper_complete").className = "animated fadeOutDown red_back freeze_body";
    setTimeout(function(){window.location = "lungCancer.html";}, 1000) 
}

function open_pancreatic_cancer()
{
    localStorage.setItem("coming_from", "disease_page");
    document.getElementById("the_body").className = "red_back"
    document.getElementById("full_wrapper_complete").className = "animated fadeOutDown red_back freeze_body";
    setTimeout(function(){window.location = "pancreaticCancer.html";}, 1000) 
}

function open_ovarian_cancer()
{
    localStorage.setItem("coming_from", "disease_page");
    document.getElementById("the_body").className = "red_back"
    document.getElementById("full_wrapper_complete").className = "animated fadeOutDown red_back freeze_body";
    setTimeout(function(){window.location = "ovarianCancer.html";}, 1000) 
}

function open_blood_cancer()
{
    localStorage.setItem("coming_from", "disease_page");
	
	if(localStorage.getItem("blood_visited") == "false")
	{
		var num = parseInt(localStorage.getItem("disease_pages_visited"));
		num++;
		num = num.toString();
		localStorage.setItem("disease_pages_visited", num);
		alert(localStorage.getItem("disease_pages_visited"));
	}
	
	localStorage.setItem("blood_visited", "true");
	
	
    document.getElementById("the_body").className = "red_back"
    document.getElementById("full_wrapper_complete").className = "animated fadeOutDown red_back freeze_body";
    setTimeout(function(){window.location = "bloodCancer.html";}, 1000)
}

function open_bone_cancer()
{
    localStorage.setItem("coming_from", "disease_page");
    document.getElementById("the_body").className = "red_back"
    document.getElementById("full_wrapper_complete").className = "animated fadeOutDown red_back freeze_body";
    setTimeout(function(){window.location = "boneCancer.html";}, 1000)
}

function open_brain_cancer()
{
    localStorage.setItem("coming_from", "disease_page");
    document.getElementById("the_body").className = "red_back"
    document.getElementById("full_wrapper_complete").className = "animated fadeOutDown red_back freeze_body";
    setTimeout(function(){window.location = "brainCancer.html";}, 1000)
}

function open_breast_cancer()
{
    localStorage.setItem("coming_from", "disease_page");
    document.getElementById("the_body").className = "red_back"
    document.getElementById("full_wrapper_complete").className = "animated fadeOutDown red_back freeze_body";
    setTimeout(function(){window.location = "breastCancer.html";}, 1000)
}

function open_eye_cancer()
{
    localStorage.setItem("coming_from", "disease_page");
    document.getElementById("the_body").className = "red_back"
    document.getElementById("full_wrapper_complete").className = "animated fadeOutDown red_back freeze_body";
    setTimeout(function(){window.location = "eyeCancer.html";}, 1000)
}

function open_lymphatic()
{
	window.location = "lymphaticCancer.html";
}

function learn_more(value)
{
    
    if(value == "bladder_first")
    {
        swiper.slideTo(0, 1000);
        document.body.style.backgroundColor = "#38CA8B";
        setInterval(function () {document.getElementById("full_wrapper_complete").className = "animated fadeOutDown";
                    }, 1010);
        setInterval(function () {window.location = "bladder_first.html";}, 2200);
    }
    
    if(value == "bladder_second")
    {
        swiper.slideTo(0, 1000);
        document.body.style.backgroundColor = "#38CA8B";
        setInterval(function () {document.getElementById("full_wrapper_complete").className = "animated fadeOutDown";
                    }, 1010);
        setInterval(function () {window.location = "bladder_second.html";}, 2200);
    }
    
    if(value == "bladder_third")
    {
        swiper.slideTo(0, 1000);
        document.body.style.backgroundColor = "#38CA8B";
        setInterval(function () {document.getElementById("full_wrapper_complete").className = "animated fadeOutDown";
                    }, 1010);
        setInterval(function () {window.location = "bladder_third.html";}, 2200);
    }
    
    if(value == "bladder_fourth")
    {
        swiper.slideTo(0, 1000);
        document.body.style.backgroundColor = "#38CA8B";
        setInterval(function () {document.getElementById("full_wrapper_complete").className = "animated fadeOutDown";
                    }, 1010);
        setInterval(function () {window.location = "bladder_fourth.html";}, 2200);
    }
	
	if(value == "oral_first")
    {
        swiper.slideTo(0, 1000);
        document.body.style.backgroundColor = "#38CA8B";
        setInterval(function () {document.getElementById("full_wrapper_complete").className = "animated fadeOutDown";
                    }, 1010);
        setInterval(function () {window.location = "oral_first.html";}, 2200);
    }
    
    if(value == "oral_second")
    {
        swiper.slideTo(0, 1000);
        document.body.style.backgroundColor = "#38CA8B";
        setInterval(function () {document.getElementById("full_wrapper_complete").className = "animated fadeOutDown";
                    }, 1010);
        setInterval(function () {window.location = "oral_second.html";}, 2200);
    }
    
    if(value == "oral_third")
    {
        swiper.slideTo(0, 1000);
        document.body.style.backgroundColor = "#38CA8B";
        setInterval(function () {document.getElementById("full_wrapper_complete").className = "animated fadeOutDown";
                    }, 1010);
        setInterval(function () {window.location = "oral_third.html";}, 2200);
    }
    
    if(value == "oral_fourth")
    {
        swiper.slideTo(0, 1000);
        document.body.style.backgroundColor = "#38CA8B";
        setInterval(function () {document.getElementById("full_wrapper_complete").className = "animated fadeOutDown";
                    }, 1010);
        setInterval(function () {window.location = "oral_fourth.html";}, 2200);
    }
	
	if(value == "lymph_first")
    {
        swiper.slideTo(0, 1000);
        document.body.style.backgroundColor = "#38CA8B";
        setInterval(function () {document.getElementById("full_wrapper_complete").className = "animated fadeOutDown";
                    }, 1010);
        setInterval(function () {window.location = "lymph_first.html";}, 2200);
    }
    
    if(value == "lymph_second")
    {
        swiper.slideTo(0, 1000);
        document.body.style.backgroundColor = "#38CA8B";
        setInterval(function () {document.getElementById("full_wrapper_complete").className = "animated fadeOutDown";
                    }, 1010);
        setInterval(function () {window.location = "lymph_second.html";}, 2200);
    }
    
    if(value == "lymph_third")
    {
        swiper.slideTo(0, 1000);
        document.body.style.backgroundColor = "#38CA8B";
        setInterval(function () {document.getElementById("full_wrapper_complete").className = "animated fadeOutDown";
                    }, 1010);
        setInterval(function () {window.location = "lymph_third.html";}, 2200);
    }
    
    if(value == "lymph_fourth")
    {
        swiper.slideTo(0, 1000);
        document.body.style.backgroundColor = "#38CA8B";
        setInterval(function () {document.getElementById("full_wrapper_complete").className = "animated fadeOutDown";
                    }, 1010);
        setInterval(function () {window.location = "lymph_fourth.html";}, 2200);
    }
	
	if(value == "colo_first")
    {
        swiper.slideTo(0, 1000);
        document.body.style.backgroundColor = "#38CA8B";
        setInterval(function () {document.getElementById("full_wrapper_complete").className = "animated fadeOutDown";
                    }, 1010);
        setInterval(function () {window.location = "colon_first.html";}, 2200);
    }
    
    if(value == "colo_second")
    {
        swiper.slideTo(0, 1000);
        document.body.style.backgroundColor = "#38CA8B";
        setInterval(function () {document.getElementById("full_wrapper_complete").className = "animated fadeOutDown";
                    }, 1010);
        setInterval(function () {window.location = "colon_second.html";}, 2200);
    }
    
    if(value == "colo_third")
    {
        swiper.slideTo(0, 1000);
        document.body.style.backgroundColor = "#38CA8B";
        setInterval(function () {document.getElementById("full_wrapper_complete").className = "animated fadeOutDown";
                    }, 1010);
        setInterval(function () {window.location = "colon_third.html";}, 2200);
    }
    
    if(value == "colo_fourth")
    {
        swiper.slideTo(0, 1000);
        document.body.style.backgroundColor = "#38CA8B";
        setInterval(function () {document.getElementById("full_wrapper_complete").className = "animated fadeOutDown";
                    }, 1010);
        setInterval(function () {window.location = "colon_fourth.html";}, 2200);
    }
	
	  if(value == "skin_first")
    {
        swiper.slideTo(0, 1000);
        document.body.style.backgroundColor = "#38CA8B";
        setInterval(function () {document.getElementById("full_wrapper_complete").className = "animated fadeOutDown";
                    }, 1010);
        setInterval(function () {window.location = "skin_first.html";}, 2200);
    }
    
    if(value == "skin_second")
    {
        swiper.slideTo(0, 1000);
        document.body.style.backgroundColor = "#38CA8B";
        setInterval(function () {document.getElementById("full_wrapper_complete").className = "animated fadeOutDown";
                    }, 1010);
        setInterval(function () {window.location = "skin_second.html";}, 2200);
    }
    
    if(value == "skin_third")
    {
        swiper.slideTo(0, 1000);
        document.body.style.backgroundColor = "#38CA8B";
        setInterval(function () {document.getElementById("full_wrapper_complete").className = "animated fadeOutDown";
                    }, 1010);
        setInterval(function () {window.location = "skin_third.html";}, 2200);
    }
    
    if(value == "skin_fourth")
    {
        swiper.slideTo(0, 1000);
        document.body.style.backgroundColor = "#38CA8B";
        setInterval(function () {document.getElementById("full_wrapper_complete").className = "animated fadeOutDown";
                    }, 1010);
        setInterval(function () {window.location = "skin_fourth.html";}, 2200);
    }
	
	 if(value == "thyroid_first")
    {
        swiper.slideTo(0, 1000);
        document.body.style.backgroundColor = "#38CA8B";
        setInterval(function () {document.getElementById("full_wrapper_complete").className = "animated fadeOutDown";
                    }, 1010);
        setInterval(function () {window.location = "thyroid_first.html";}, 2200);
    }
    
    if(value == "thyroid_second")
    {
        swiper.slideTo(0, 1000);
        document.body.style.backgroundColor = "#38CA8B";
        setInterval(function () {document.getElementById("full_wrapper_complete").className = "animated fadeOutDown";
                    }, 1010);
        setInterval(function () {window.location = "thyroid_second.html";}, 2200);
    }
    
    if(value == "thyroid_third")
    {
        swiper.slideTo(0, 1000);
        document.body.style.backgroundColor = "#38CA8B";
        setInterval(function () {document.getElementById("full_wrapper_complete").className = "animated fadeOutDown";
                    }, 1010);
        setInterval(function () {window.location = "thyroid_third.html";}, 2200);
    }
    
    if(value == "thyroid_fourth")
    {
        swiper.slideTo(0, 1000);
        document.body.style.backgroundColor = "#38CA8B";
        setInterval(function () {document.getElementById("full_wrapper_complete").className = "animated fadeOutDown";
                    }, 1010);
        setInterval(function () {window.location = "thyroid_fourth.html";}, 2200);
    }
    
    if(value == "blood_first")
    {
        swiper.slideTo(0, 1000);
        document.body.style.backgroundColor = "#38CA8B";
        setInterval(function () {document.getElementById("full_wrapper_complete").className = "animated fadeOutDown";
                    }, 1010);
        setInterval(function () {window.location = "blood_one.html";}, 2200);
    }
    
    if(value == "blood_second")
    {
        swiper.slideTo(0, 1000);
        document.body.style.backgroundColor = "#38CA8B";
        setInterval(function () {document.getElementById("full_wrapper_complete").className = "animated fadeOutDown";
                    }, 1010);
        setInterval(function () {window.location = "blood_two.html";}, 2200);
    }
    
    if(value == "blood_third")
    {
        swiper.slideTo(0, 1000);
        document.body.style.backgroundColor = "#38CA8B";
        setInterval(function () {document.getElementById("full_wrapper_complete").className = "animated fadeOutDown";
                    }, 1010);
        setInterval(function () {window.location = "blood_three.html";}, 2200);
    }
    
    if(value == "blood_fourth")
    {
        swiper.slideTo(0, 1000);
        document.body.style.backgroundColor = "#38CA8B";
        setInterval(function () {document.getElementById("full_wrapper_complete").className = "animated fadeOutDown";
                    }, 1010);
        setInterval(function () {window.location = "blood_four.html";}, 2200);
    }
	
	if(value == "test_first")
    {
        swiper.slideTo(0, 1000);
        document.body.style.backgroundColor = "#38CA8B";
        setInterval(function () {document.getElementById("full_wrapper_complete").className = "animated fadeOutDown";
                    }, 1010);
        setInterval(function () {window.location = "testicular_first.html";}, 2200);
    }
    
    if(value == "test_second")
    {
        swiper.slideTo(0, 1000);
        document.body.style.backgroundColor = "#38CA8B";
        setInterval(function () {document.getElementById("full_wrapper_complete").className = "animated fadeOutDown";
                    }, 1010);
        setInterval(function () {window.location = "testicular_second.html";}, 2200);
    }
    
    if(value == "test_third")
    {
        swiper.slideTo(0, 1000);
        document.body.style.backgroundColor = "#38CA8B";
        setInterval(function () {document.getElementById("full_wrapper_complete").className = "animated fadeOutDown";
                    }, 1010);
        setInterval(function () {window.location = "testicular_third.html";}, 2200);
    }
    
    if(value == "test_fourth")
    {
        swiper.slideTo(0, 1000);
        document.body.style.backgroundColor = "#38CA8B";
        setInterval(function () {document.getElementById("full_wrapper_complete").className = "animated fadeOutDown";
                    }, 1010);
        setInterval(function () {window.location = "testicular_fourth.html";}, 2200);
    }
    
    if(value == "brain_first")
    {
        swiper.slideTo(0, 1000);
        document.body.style.backgroundColor = "#38CA8B";
        setInterval(function () {document.getElementById("full_wrapper_complete").className = "animated fadeOutDown";
                    }, 1010);
        setInterval(function () {window.location = "brain_first.html";}, 2200);
    }
    
    if(value == "brain_second")
    {
        swiper.slideTo(0, 1000);
        document.body.style.backgroundColor = "#38CA8B";
        setInterval(function () {document.getElementById("full_wrapper_complete").className = "animated fadeOutDown";
                    }, 1010);
        setInterval(function () {window.location = "brain_second.html";}, 2200);
    }
    
    if(value == "brain_third")
    {
        swiper.slideTo(0, 1000);
        document.body.style.backgroundColor = "#38CA8B";
        setInterval(function () {document.getElementById("full_wrapper_complete").className = "animated fadeOutDown";
                    }, 1010);
        setInterval(function () {window.location = "brain_third.html";}, 2200);
    }
    
    if(value == "brain_fourth")
    {
        swiper.slideTo(0, 1000);
        document.body.style.backgroundColor = "#38CA8B";
        setInterval(function () {document.getElementById("full_wrapper_complete").className = "animated fadeOutDown";
                    }, 1010);
        setInterval(function () {window.location = "brain_fourth.html";}, 2200);
    }
    
    if(value == "bone_first")
    {
        swiper.slideTo(0, 1000);
        document.body.style.backgroundColor = "#38CA8B";
        setInterval(function () {document.getElementById("full_wrapper_complete").className = "animated fadeOutDown";
                    }, 1010);
        setInterval(function () {window.location = "bone_first.html";}, 2200);
    }
    
    if(value == "bone_second")
    {
        swiper.slideTo(0, 1000);
        document.body.style.backgroundColor = "#38CA8B";
        setInterval(function () {document.getElementById("full_wrapper_complete").className = "animated fadeOutDown";
                    }, 1010);
        setInterval(function () {window.location = "bone_second.html";}, 2200);
    }
    
    if(value == "bone_third")
    {
        swiper.slideTo(0, 1000);
        document.body.style.backgroundColor = "#38CA8B";
        setInterval(function () {document.getElementById("full_wrapper_complete").className = "animated fadeOutDown";
                    }, 1010);
        setInterval(function () {window.location = "bone_third.html";}, 2200);
    }
    
    if(value == "bone_fourth")
    {
        swiper.slideTo(0, 1000);
        document.body.style.backgroundColor = "#38CA8B";
        setInterval(function () {document.getElementById("full_wrapper_complete").className = "animated fadeOutDown";
                    }, 1010);
        setInterval(function () {window.location = "bone_fourth.html";}, 2200);
    }
    
    if(value == "breast_first")
    {
        swiper.slideTo(0, 1000);
        document.body.style.backgroundColor = "#38CA8B";
        setInterval(function () {document.getElementById("full_wrapper_complete").className = "animated fadeOutDown";
                    }, 1010);
        setInterval(function () {window.location = "breast_first.html";}, 2200);
    }
    
    if(value == "breast_second")
    {
        swiper.slideTo(0, 1000);
        document.body.style.backgroundColor = "#38CA8B";
        setInterval(function () {document.getElementById("full_wrapper_complete").className = "animated fadeOutDown";
                    }, 1010);
        setInterval(function () {window.location = "breast_second.html";}, 2200);
    }
    
    if(value == "breast_third")
    {
        swiper.slideTo(0, 1000);
        document.body.style.backgroundColor = "#38CA8B";
        setInterval(function () {document.getElementById("full_wrapper_complete").className = "animated fadeOutDown";
                    }, 1010);
        setInterval(function () {window.location = "breast_third.html";}, 2200);
    }
    
    if(value == "breast_fourth")
    {
        swiper.slideTo(0, 1000);
        document.body.style.backgroundColor = "#38CA8B";
        setInterval(function () {document.getElementById("full_wrapper_complete").className = "animated fadeOutDown";
                    }, 1010);
        setInterval(function () {window.location = "breast_fourth.html";}, 2200);
    }
    
    if(value == "eye_first")
    {
        swiper.slideTo(0, 1000);
        document.body.style.backgroundColor = "#38CA8B";
        setInterval(function () {document.getElementById("full_wrapper_complete").className = "animated fadeOutDown";
                    }, 1010);
        setInterval(function () {window.location = "eye_first.html";}, 2200);
    }
    
     if(value == "eye_second")
    {
        swiper.slideTo(0, 1000);
        document.body.style.backgroundColor = "#38CA8B";
        setInterval(function () {document.getElementById("full_wrapper_complete").className = "animated fadeOutDown";
                    }, 1010);
        setInterval(function () {window.location = "eye_second.html";}, 2200);
    }
    
     if(value == "eye_third")
    {
        swiper.slideTo(0, 1000);
        document.body.style.backgroundColor = "#38CA8B";
        setInterval(function () {document.getElementById("full_wrapper_complete").className = "animated fadeOutDown";
                    }, 1010);
        setInterval(function () {window.location = "eye_third.html";}, 2200);
    }
    
     if(value == "eye_fourth")
    {
        swiper.slideTo(0, 1000);
        document.body.style.backgroundColor = "#38CA8B";
        setInterval(function () {document.getElementById("full_wrapper_complete").className = "animated fadeOutDown";
                    }, 1010);
        setInterval(function () {window.location = "eye_fourth.html";}, 2200);
    }
    
     if(value == "lung_first")
    {
        swiper.slideTo(0, 1000);
        document.body.style.backgroundColor = "#38CA8B";
        setInterval(function () {document.getElementById("full_wrapper_complete").className = "animated fadeOutDown";
                    }, 1010);
        setInterval(function () {window.location = "lung_first.html";}, 2200);
    }
    
     if(value == "lung_second")
    {
        swiper.slideTo(0, 1000);
        document.body.style.backgroundColor = "#38CA8B";
        setInterval(function () {document.getElementById("full_wrapper_complete").className = "animated fadeOutDown";
                    }, 1010);
        setInterval(function () {window.location = "lung_second.html";}, 2200);
    }
    
     if(value == "lung_third")
    {
        swiper.slideTo(0, 1000);
        document.body.style.backgroundColor = "#38CA8B";
        setInterval(function () {document.getElementById("full_wrapper_complete").className = "animated fadeOutDown";
                    }, 1010);
        setInterval(function () {window.location = "lung_third.html";}, 2200);
    }
    
     if(value == "lung_fourth")
    {
        swiper.slideTo(0, 1000);
        document.body.style.backgroundColor = "#38CA8B";
        setInterval(function () {document.getElementById("full_wrapper_complete").className = "animated fadeOutDown";
                    }, 1010);
        setInterval(function () {window.location = "lung_fourth.html";}, 2200);
    }
    
    if(value == "liver_first")
    {
        swiper.slideTo(0, 1000);
        document.body.style.backgroundColor = "#38CA8B";
        setInterval(function () {document.getElementById("full_wrapper_complete").className = "animated fadeOutDown";
                    }, 1010);
        setInterval(function () {window.location = "liver_first.html";}, 2200);
    }
    
     if(value == "liver_second")
    {
        swiper.slideTo(0, 1000);
        document.body.style.backgroundColor = "#38CA8B";
        setInterval(function () {document.getElementById("full_wrapper_complete").className = "animated fadeOutDown";
                    }, 1010);
        setInterval(function () {window.location = "liver_second.html";}, 2200);
    }
    
     if(value == "liver_third")
    {
        swiper.slideTo(0, 1000);
        document.body.style.backgroundColor = "#38CA8B";
        setInterval(function () {document.getElementById("full_wrapper_complete").className = "animated fadeOutDown";
                    }, 1010);
        setInterval(function () {window.location = "liver_third.html";}, 2200);
    }
    
     if(value == "liver_fourth")
    {
        swiper.slideTo(0, 1000);
        document.body.style.backgroundColor = "#38CA8B";
        setInterval(function () {document.getElementById("full_wrapper_complete").className = "animated fadeOutDown";
                    }, 1010);
        setInterval(function () {window.location = "liver_fourth.html";}, 2200);
    }
    
      if(value == "ovarian_first")
    {
        swiper.slideTo(0, 1000);
        document.body.style.backgroundColor = "#38CA8B";
        setInterval(function () {document.getElementById("full_wrapper_complete").className = "animated fadeOutDown";
                    }, 1010);
        setInterval(function () {window.location = "ovarian_first.html";}, 2200);
    }
    
      if(value == "ovarian_second")
    {
        swiper.slideTo(0, 1000);
        document.body.style.backgroundColor = "#38CA8B";
        setInterval(function () {document.getElementById("full_wrapper_complete").className = "animated fadeOutDown";
                    }, 1010);
        setInterval(function () {window.location = "ovarian_second.html";}, 2200);
    }
    
      if(value == "ovarian_third")
    {
        swiper.slideTo(0, 1000);
        document.body.style.backgroundColor = "#38CA8B";
        setInterval(function () {document.getElementById("full_wrapper_complete").className = "animated fadeOutDown";
                    }, 1010);
        setInterval(function () {window.location = "ovarian_third.html";}, 2200);
    }
    
      if(value == "ovarian_fourth")
    {
        swiper.slideTo(0, 1000);
        document.body.style.backgroundColor = "#38CA8B";
        setInterval(function () {document.getElementById("full_wrapper_complete").className = "animated fadeOutDown";
                    }, 1010);
        setInterval(function () {window.location = "ovarian_fourth.html";}, 2200);
    }
    
     if(value == "pancreatic_first")
    {
        swiper.slideTo(0, 1000);
        document.body.style.backgroundColor = "#38CA8B";
        setInterval(function () {document.getElementById("full_wrapper_complete").className = "animated fadeOutDown";
                    }, 1010);
        setInterval(function () {window.location = "pancreatic_first.html";}, 2200);
    }
    
      if(value == "pancreatic_second")
    {
        swiper.slideTo(0, 1000);
        document.body.style.backgroundColor = "#38CA8B";
        setInterval(function () {document.getElementById("full_wrapper_complete").className = "animated fadeOutDown";
                    }, 1010);
        setInterval(function () {window.location = "pancreatic_second.html";}, 2200);
    }
    
      if(value == "pancreatic_third")
    {
        swiper.slideTo(0, 1000);
        document.body.style.backgroundColor = "#38CA8B";
        setInterval(function () {document.getElementById("full_wrapper_complete").className = "animated fadeOutDown";
                    }, 1010);
        setInterval(function () {window.location = "pancreatic_third.html";}, 2200);
    }
    
      if(value == "pancreatic_fourth")
    {
        swiper.slideTo(0, 1000);
        document.body.style.backgroundColor = "#38CA8B";
        setInterval(function () {document.getElementById("full_wrapper_complete").className = "animated fadeOutDown";
                    }, 1010);
        setInterval(function () {window.location = "pancreatic_fourth.html";}, 2200);
    }
	
	if(value == "endo_first")
    {
        swiper.slideTo(0, 1000);
        document.body.style.backgroundColor = "#38CA8B";
        setInterval(function () {document.getElementById("full_wrapper_complete").className = "animated fadeOutDown";
                    }, 1010);
        setInterval(function () {window.location = "endo_first.html";}, 2200);
    }
    
    if(value == "endo_second")
    {
        swiper.slideTo(0, 1000);
        document.body.style.backgroundColor = "#38CA8B";
        setInterval(function () {document.getElementById("full_wrapper_complete").className = "animated fadeOutDown";
                    }, 1010);
        setInterval(function () {window.location = "endo_second.html";}, 2200);
    }
    
    if(value == "endo_third")
    {
        swiper.slideTo(0, 1000);
        document.body.style.backgroundColor = "#38CA8B";
        setInterval(function () {document.getElementById("full_wrapper_complete").className = "animated fadeOutDown";
                    }, 1010);
        setInterval(function () {window.location = "endo_third.html";}, 2200);
    }
    
    if(value == "endo_fourth")
    {
        swiper.slideTo(0, 1000);
        document.body.style.backgroundColor = "#38CA8B";
        setInterval(function () {document.getElementById("full_wrapper_complete").className = "animated fadeOutDown";
                    }, 1010);
        setInterval(function () {window.location = "endo_fourth.html";}, 2200);
    }







}

function open_story(value)
{
    localStorage.setItem("coming_from", "disease_page");
    document.getElementById("the_body").className = "purple_back";
    document.getElementById("full_wrapper_complete").className = "animated fadeOutDown purple_back freeze_body";
    
    if(value == "lisa")
    {
        setTimeout(function(){window.location = "lisa_story.html";}, 1000); 
    }
    
    if(value == "christina")
    {
        setTimeout(function(){window.location = "christina_story.html";}, 1000);
    }
    
    if(value == "allie")
    {
         setTimeout(function(){window.location = "allie_story.html";}, 1000);
    }
    
    if(value == "jay")
    {
        setTimeout(function(){window.location = "jay_story.html";}, 1000);
    }
    
    if(value == "komi")
    {
        setTimeout(function(){window.location = "komi_story.html";}, 1000);
    }
    
    if(value == "shobi")
    {
        setTimeout(function(){window.location = "shobi_story.html";}, 1000);
    }
    
    if(value == "jake")
    {
        setTimeout(function(){window.location = "jake_story.html";}, 1000);
    }
}

function go_back()
{
    window.history.back();
}

function open_external(value)
{
    
}

function init_donation_card()
{
    if(localStorage.getItem("BCAN") == "true")
    {
        document.getElementById("BCAN").src = "img/heartOn.png";
        localStorage.setItem("BCAN_ACTIVE", "true");
    }
    
    if(localStorage.getItem("BCC") == "true")
    {
        document.getElementById("BCC").src = "img/heartOn.png";
        localStorage.setItem("BCC_ACTIVE", "true");
    }
    
    if(localStorage.getItem("LLS") == "true")
    {
        document.getElementById("LLS").src = "img/heartOn.png";
        localStorage.setItem("LLS_ACTIVE", "true");
    }
    
    if(localStorage.getItem("LLR") == "true")
    {
        document.getElementById("LLR").src = "img/heartOn.png";
        localStorage.setItem("LLR_ACTIVE", "true");
    }
    
    if(localStorage.getItem("BCRT") == "true")
    {
        document.getElementById("BCRT").src = "img/heartOn.png";
        localStorage.setItem("BCRT_ACTIVE", "true");
    }
    
    if(localStorage.getItem("TSF") == "true")
    {
        document.getElementById("TSF").src = "img/heartOn.png";
        localStorage.setItem("TSF_ACTIVE", "true");
    }
    
    if(localStorage.getItem("ABTA") == "true")
    {
        document.getElementById("ABTA").src = "img/heartOn.png";
        localStorage.setItem("ABTA_ACTIVE", "true");
    }
    
    if(localStorage.getItem("NBTS") == "true")
    {
        document.getElementById("NBTS").src = "img/heartOn.png";
        localStorage.setItem("NBTS_ACTIVE", "true");
    }
    
    if(localStorage.getItem("NBCF") == "true")
    {
        document.getElementById("NBCF").src = "img/heartOn.png";
        localStorage.setItem("NBCF_ACTIVE", "true");
    }
    
    if(localStorage.getItem("BCRF") == "true")
    {
        document.getElementById("BCRF").src = "img/heartOn.png";
        localStorage.setItem("BCRF_ACTIVE", "true");
    }
    
    if(localStorage.getItem("FCC") == "true")
    {
        document.getElementById("FCC").src = "img/heartOn.png";
        localStorage.setItem("FCC_ACTIVE", "true");
    }
    
    if(localStorage.getItem("NCCRA") == "true")
    {
        document.getElementById("NCCRA").src = "img/heartOn.png";
        localStorage.setItem("NCCRA_ACTIVE", "true");
    }
    
    if(localStorage.getItem("FWC") == "true")
    {
        document.getElementById("FWC").src = "img/heartOn.png";
        localStorage.setItem("FWC_ACTIVE", "true");
    }
    
    if(localStorage.getItem("MKF") == "true")
    {
        document.getElementById("MKF").src = "img/heartOn.png";
        localStorage.setItem("MKF_ACTIVE", "true");
    }
    
}

function init_donation_card_two()
{
    if(localStorage.getItem("ETRF") == "true")
    {
        document.getElementById("ETRF").src = "img/heartOn.png";
        localStorage.setItem("ETRF_ACTIVE", "true");
    }
    
    if(localStorage.getItem("ECF") == "true")
    {
        document.getElementById("ECF").src = "img/heartOn.png";
        localStorage.setItem("ECF_ACTIVE", "true");
    }
    
    if(localStorage.getItem("FFLR") == "true")
    {
        document.getElementById("FFLR").src = "img/heartOn.png";
        localStorage.setItem("FFLR_ACTIVE", "true");
    }
    
    if(localStorage.getItem("LCRF") == "true")
    {
        document.getElementById("LCRF").src = "img/heartOn.png";
        localStorage.setItem("LCRF_ACTIVE", "true");
    }
    
    if(localStorage.getItem("HLF") == "true")
    {
        document.getElementById("HLF").src = "img/heartOn.png";
        localStorage.setItem("HLF_ACTIVE", "true");
    }
    
    if(localStorage.getItem("LCFA") == "true")
    {
        document.getElementById("LCFA").src = "img/heartOn.png";
        localStorage.setItem("LCFA_ACTIVE", "true");
    }
    
    if(localStorage.getItem("LRF") == "true")
    {
        document.getElementById("LRF").src = "img/heartOn.png";
        localStorage.setItem("LRF_ACTIVE", "true");
    }
    
    if(localStorage.getItem("LFA") == "true")
    {
        document.getElementById("LFA").src = "img/heartOn.png";
        localStorage.setItem("LFA_ACTIVE", "true");
    }
    
    if(localStorage.getItem("OCF") == "true")
    {
        document.getElementById("OCF").src = "img/heartOn.png";
        localStorage.setItem("OCF_ACTIVE", "true");
    }
    
    if(localStorage.getItem("MCF") == "true")
    {
        document.getElementById("MCF").src = "img/heartOn.png";
        localStorage.setItem("MCF_ACTIVE", "true");
    }
    
    if(localStorage.getItem("OCRF") == "true")
    {
        document.getElementById("OCRF").src = "img/heartOn.png";
        localStorage.setItem("OCRF_ACTIVE", "true");
    }
    
    if(localStorage.getItem("NOCC") == "true")
    {
        document.getElementById("NOCC").src = "img/heartOn.png";
        localStorage.setItem("NOCC_ACTIVE", "true");
    }
    
    if(localStorage.getItem("LF") == "true")
    {
        document.getElementById("LF").src = "img/heartOn.png";
        localStorage.setItem("LF_ACTIVE", "true");
    }
    
    if(localStorage.getItem("PCAN") == "true")
    {
        document.getElementById("PCAN").src = "img/heartOn.png";
        localStorage.setItem("PCAN_ACTIVE", "true");
    }
    
}

function init_donation_card_three()
{
    if(localStorage.getItem("SCF") == "true")
    {
        document.getElementById("SCF").src = "img/heartOn.png";
        localStorage.setItem("SCF_ACTIVE", "true");
    }
    
    if(localStorage.getItem("ASA") == "true")
    {
        document.getElementById("ASA").src = "img/heartOn.png";
        localStorage.setItem("ASA_ACTIVE", "true");
    }
    
    if(localStorage.getItem("TCS") == "true")
    {
        document.getElementById("TCS").src = "img/heartOn.png";
        localStorage.setItem("TCS_ACTIVE", "true");
    }
    
    if(localStorage.getItem("TCAF") == "true")
    {
        document.getElementById("TCAF").src = "img/heartOn.png";
        localStorage.setItem("TCAF_ACTIVE", "true");
    }
    
    if(localStorage.getItem("TCSA") == "true")
    {
        document.getElementById("TCSA").src = "img/heartOn.png";
        localStorage.setItem("TCSA_ACTIVE", "true");
    }
    
    if(localStorage.getItem("LOLF") == "true")
    {
        document.getElementById("LOLF").src = "img/heartOn.png";
        localStorage.setItem("LOLF_ACTIVE", "true");
    }
}

function init_donation_card_four()
{
    if(localStorage.getItem("desktop") == "true")
    {
        document.getElementById("desktop").src = "img/heartOn.png";
        localStorage.setItem("desktop_ACTIVE", "true");
    }
    
    if(localStorage.getItem("twitter") == "true")
    {
        document.getElementById("twitter").src = "img/heartOn.png";
        localStorage.setItem("twitter_ACTIVE", "true");
    }
    
}

function save_charity(value)
{   
    
    if(value == "BCAN")
    {
        
        if(localStorage.getItem("BCAN_ACTIVE") == "false")
        {
            document.getElementById("BCAN").src = "img/heartOn.png";
            localStorage.setItem("BCAN_ACTIVE", "true");
            localStorage.setItem("BCAN", "true");
        }else
        {
            document.getElementById("BCAN").src = "img/heartOff.png";
            localStorage.setItem("BCAN_ACTIVE", "false");
            localStorage.setItem("BCAN", "false");
        }
        
    }
    
    if(value == "BCC")
    {
        
        if(localStorage.getItem("BCC_ACTIVE") == "false")
        {
            document.getElementById("BCC").src = "img/heartOn.png";
            localStorage.setItem("BCC_ACTIVE", "true");
            localStorage.setItem("BCC", "true");
        }else
        {
            document.getElementById("BCC").src = "img/heartOff.png";
            localStorage.setItem("BCC_ACTIVE", "false");
            localStorage.setItem("BCC", "false");
        }
        
    }
    
    if(value == "LLS")
    {
        
        if(localStorage.getItem("LLS_ACTIVE") == "false")
        {
            document.getElementById("LLS").src = "img/heartOn.png";
            localStorage.setItem("LLS_ACTIVE", "true");
            localStorage.setItem("LLS", "true");
        }else
        {
            document.getElementById("LLS").src = "img/heartOff.png";
            localStorage.setItem("LLS_ACTIVE", "false");
            localStorage.setItem("LLS", "false");
        }
        
    }
    
    if(value == "LLR")
    {
        
        if(localStorage.getItem("LLR_ACTIVE") == "false")
        {
            document.getElementById("LLR").src = "img/heartOn.png";
            localStorage.setItem("LLR_ACTIVE", "true");
            localStorage.setItem("LLR", "true");
        }else
        {
            document.getElementById("LLR").src = "img/heartOff.png";
            localStorage.setItem("LLR_ACTIVE", "false");
            localStorage.setItem("LLR", "false");
        }
        
    }
    
    if(value == "BCRT")
    {
        
        if(localStorage.getItem("BCRT_ACTIVE") == "false")
        {
            document.getElementById("BCRT").src = "img/heartOn.png";
            localStorage.setItem("BCRT_ACTIVE", "true");
            localStorage.setItem("BCRT", "true");
        }else
        {
            document.getElementById("BCRT").src = "img/heartOff.png";
            localStorage.setItem("BCRT_ACTIVE", "false");
            localStorage.setItem("BCRT", "false");
        }
        
    }
    
    if(value == "TSF")
    {
        
        if(localStorage.getItem("TSF_ACTIVE") == "false")
        {
            document.getElementById("TSF").src = "img/heartOn.png";
            localStorage.setItem("TSF_ACTIVE", "true");
            localStorage.setItem("TSF", "true");
        }else
        {
            document.getElementById("TSF").src = "img/heartOff.png";
            localStorage.setItem("TSF_ACTIVE", "false");
            localStorage.setItem("TSF", "false");
        }
        
    }
    
    if(value == "ABTA")
    {
        
        if(localStorage.getItem("ABTA_ACTIVE") == "false")
        {
            document.getElementById("ABTA").src = "img/heartOn.png";
            localStorage.setItem("ABTA_ACTIVE", "true");
            localStorage.setItem("ABTA", "true");
        }else
        {
            document.getElementById("ABTA").src = "img/heartOff.png";
            localStorage.setItem("ABTA_ACTIVE", "false");
            localStorage.setItem("ABTA", "false");
        }
        
    }
    
    if(value == "NBTS")
    {
        
        if(localStorage.getItem("NBTS_ACTIVE") == "false")
        {
            document.getElementById("NBTS").src = "img/heartOn.png";
            localStorage.setItem("NBTS_ACTIVE", "true");
            localStorage.setItem("NBTS", "true");
        }else
        {
            document.getElementById("NBTS").src = "img/heartOff.png";
            localStorage.setItem("NBTS_ACTIVE", "false");
            localStorage.setItem("NBTS", "false");
        }
        
    }
    
    if(value == "NBCF")
    {
        
        if(localStorage.getItem("NBCF_ACTIVE") == "false")
        {
            document.getElementById("NBCF").src = "img/heartOn.png";
            localStorage.setItem("NBCF_ACTIVE", "true");
            localStorage.setItem("NBCF", "true");
        }else
        {
            document.getElementById("NBCF").src = "img/heartOff.png";
            localStorage.setItem("NBCF_ACTIVE", "false");
            localStorage.setItem("NBCF", "false");
        }
        
    }
    
    if(value == "BCRF")
    {
        
        if(localStorage.getItem("BCRF_ACTIVE") == "false")
        {
            document.getElementById("BCRF").src = "img/heartOn.png";
            localStorage.setItem("BCRF_ACTIVE", "true");
            localStorage.setItem("BCRF", "true");
        }else
        {
            document.getElementById("BCRF").src = "img/heartOff.png";
            localStorage.setItem("BCRF_ACTIVE", "false");
            localStorage.setItem("BCRF", "false");
        }
        
    }
    
    if(value == "FCC")
    {
        
        if(localStorage.getItem("FCC_ACTIVE") == "false")
        {
            document.getElementById("FCC").src = "img/heartOn.png";
            localStorage.setItem("FCC_ACTIVE", "true");
            localStorage.setItem("FCC", "true");
        }else
        {
            document.getElementById("FCC").src = "img/heartOff.png";
            localStorage.setItem("FCC_ACTIVE", "false");
            localStorage.setItem("FCC", "false");
        }
        
    }
    
    if(value == "NCCRA")
    {
        
        if(localStorage.getItem("NCCRA_ACTIVE") == "false")
        {
            document.getElementById("NCCRA").src = "img/heartOn.png";
            localStorage.setItem("NCCRA_ACTIVE", "true");
            localStorage.setItem("NCCRA", "true");
        }else
        {
            document.getElementById("NCCRA").src = "img/heartOff.png";
            localStorage.setItem("NCCRA_ACTIVE", "false");
            localStorage.setItem("NCCRA", "false");
        }
        
    }
    
    if(value == "FWC")
    {
        
        if(localStorage.getItem("FWC_ACTIVE") == "false")
        {
            document.getElementById("FWC").src = "img/heartOn.png";
            localStorage.setItem("FWC_ACTIVE", "true");
            localStorage.setItem("FWC", "true");
        }else
        {
            document.getElementById("FWC").src = "img/heartOff.png";
            localStorage.setItem("FWC_ACTIVE", "false");
            localStorage.setItem("FWC", "false");
        }
        
    }
    
    if(value == "MKF")
    {
        
        if(localStorage.getItem("MKF_ACTIVE") == "false")
        {
            document.getElementById("MKF").src = "img/heartOn.png";
            localStorage.setItem("MKF_ACTIVE", "true");
            localStorage.setItem("MKF", "true");
        }else
        {
            document.getElementById("MKF").src = "img/heartOff.png";
            localStorage.setItem("MKF_ACTIVE", "false");
            localStorage.setItem("MKF", "false");
        }
        
    }
    
    if(value == "ETRF")
    {
        
        if(localStorage.getItem("ETRF_ACTIVE") == "false")
        {
            document.getElementById("ETRF").src = "img/heartOn.png";
            localStorage.setItem("ETRF_ACTIVE", "true");
            localStorage.setItem("ETRF", "true");
        }else
        {
            document.getElementById("ETRF").src = "img/heartOff.png";
            localStorage.setItem("ETRF_ACTIVE", "false");
            localStorage.setItem("ETRF", "false");
        }
        
    }
    
    if(value == "ECF")
    {
        
        if(localStorage.getItem("ECF_ACTIVE") == "false")
        {
            document.getElementById("ECF").src = "img/heartOn.png";
            localStorage.setItem("ECF_ACTIVE", "true");
            localStorage.setItem("ECF", "true");
        }else
        {
            document.getElementById("ECF").src = "img/heartOff.png";
            localStorage.setItem("ECF_ACTIVE", "false");
            localStorage.setItem("ECF", "false");
        }
        
    }
    
    if(value == "FFLR")
    {
        
        if(localStorage.getItem("FFLR_ACTIVE") == "false")
        {
            document.getElementById("FFLR").src = "img/heartOn.png";
            localStorage.setItem("FFLR_ACTIVE", "true");
            localStorage.setItem("FFLR", "true");
        }else
        {
            document.getElementById("FFLR").src = "img/heartOff.png";
            localStorage.setItem("FFLR_ACTIVE", "false");
            localStorage.setItem("FFLR", "false");
        }
        
    }
    
    if(value == "LCRF")
    {
        
        if(localStorage.getItem("LCRF_ACTIVE") == "false")
        {
            document.getElementById("LCRF").src = "img/heartOn.png";
            localStorage.setItem("LCRF_ACTIVE", "true");
            localStorage.setItem("LCRF", "true");
        }else
        {
            document.getElementById("LCRF").src = "img/heartOff.png";
            localStorage.setItem("LCRF_ACTIVE", "false");
            localStorage.setItem("LCRF", "false");
        }
        
    }
    
    if(value == "HLF")
    {
        
        if(localStorage.getItem("HLF_ACTIVE") == "false")
        {
            document.getElementById("HLF").src = "img/heartOn.png";
            localStorage.setItem("HLF_ACTIVE", "true");
            localStorage.setItem("HLF", "true");
        }else
        {
            document.getElementById("HLF").src = "img/heartOff.png";
            localStorage.setItem("HLF_ACTIVE", "false");
            localStorage.setItem("HLF", "false");
        }
        
    }
    
    if(value == "LCFA")
    {
        
        if(localStorage.getItem("LCFA_ACTIVE") == "false")
        {
            document.getElementById("LCFA").src = "img/heartOn.png";
            localStorage.setItem("LCFA_ACTIVE", "true");
            localStorage.setItem("LCFA", "true");
        }else
        {
            document.getElementById("LCFA").src = "img/heartOff.png";
            localStorage.setItem("LCFA_ACTIVE", "false");
            localStorage.setItem("LCFA", "false");
        }
        
    }
    
    if(value == "LRF")
    {
        
        if(localStorage.getItem("LRF_ACTIVE") == "false")
        {
            document.getElementById("LRF").src = "img/heartOn.png";
            localStorage.setItem("LRF_ACTIVE", "true");
            localStorage.setItem("LRF", "true");
        }else
        {
            document.getElementById("LRF").src = "img/heartOff.png";
            localStorage.setItem("LRF_ACTIVE", "false");
            localStorage.setItem("LRF", "false");
        }
        
    }
    
    if(value == "LFA")
    {
        
        if(localStorage.getItem("LFA_ACTIVE") == "false")
        {
            document.getElementById("LFA").src = "img/heartOn.png";
            localStorage.setItem("LFA_ACTIVE", "true");
            localStorage.setItem("LFA", "true");
        }else
        {
            document.getElementById("LFA").src = "img/heartOff.png";
            localStorage.setItem("LFA_ACTIVE", "false");
            localStorage.setItem("LFA", "false");
        }
        
    }
    
    if(value == "OCF")
    {
        
        if(localStorage.getItem("OCF_ACTIVE") == "false")
        {
            document.getElementById("OCF").src = "img/heartOn.png";
            localStorage.setItem("OCF_ACTIVE", "true");
            localStorage.setItem("OCF", "true");
        }else
        {
            document.getElementById("OCF").src = "img/heartOff.png";
            localStorage.setItem("OCF_ACTIVE", "false");
            localStorage.setItem("OCF", "false");
        }
        
    }
    
    if(value == "MCF")
    {
        
        if(localStorage.getItem("MCF_ACTIVE") == "false")
        {
            document.getElementById("MCF").src = "img/heartOn.png";
            localStorage.setItem("MCF_ACTIVE", "true");
            localStorage.setItem("MCF", "true");
        }else
        {
            document.getElementById("MCF").src = "img/heartOff.png";
            localStorage.setItem("MCF_ACTIVE", "false");
            localStorage.setItem("MCF", "false");
        }
        
    }
    
    if(value == "OCRF")
    {
        
        if(localStorage.getItem("OCRF_ACTIVE") == "false")
        {
            document.getElementById("OCRF").src = "img/heartOn.png";
            localStorage.setItem("OCRF_ACTIVE", "true");
            localStorage.setItem("OCRF", "true");
        }else
        {
            document.getElementById("OCRF").src = "img/heartOff.png";
            localStorage.setItem("OCRF_ACTIVE", "false");
            localStorage.setItem("OCRF", "false");
        }
        
    }
    
    if(value == "NOCC")
    {
        
        if(localStorage.getItem("NOCC_ACTIVE") == "false")
        {
            document.getElementById("NOCC").src = "img/heartOn.png";
            localStorage.setItem("NOCC_ACTIVE", "true");
            localStorage.setItem("NOCC", "true");
        }else
        {
            document.getElementById("NOCC").src = "img/heartOff.png";
            localStorage.setItem("NOCC_ACTIVE", "false");
            localStorage.setItem("NOCC", "false");
        }
        
    }
    
    if(value == "LF")
    {
        
        if(localStorage.getItem("LF_ACTIVE") == "false")
        {
            document.getElementById("LF").src = "img/heartOn.png";
            localStorage.setItem("LF_ACTIVE", "true");
            localStorage.setItem("LF", "true");
        }else
        {
            document.getElementById("LF").src = "img/heartOff.png";
            localStorage.setItem("LF_ACTIVE", "false");
            localStorage.setItem("LF", "false");
        }
        
    }
    
    if(value == "PCAN")
    {
        
        if(localStorage.getItem("PCAN_ACTIVE") == "false")
        {
            document.getElementById("PCAN").src = "img/heartOn.png";
            localStorage.setItem("PCAN_ACTIVE", "true");
            localStorage.setItem("PCAN", "true");
        }else
        {
            document.getElementById("PCAN").src = "img/heartOff.png";
            localStorage.setItem("PCAN_ACTIVE", "false");
            localStorage.setItem("PCAN", "false");
        }
        
    }
    
    if(value == "SCF")
    {
        
        if(localStorage.getItem("SCF_ACTIVE") == "false")
        {
            document.getElementById("SCF").src = "img/heartOn.png";
            localStorage.setItem("SCF_ACTIVE", "true");
            localStorage.setItem("SCF", "true");
        }else
        {
            document.getElementById("SCF").src = "img/heartOff.png";
            localStorage.setItem("SCF_ACTIVE", "false");
            localStorage.setItem("SCF", "false");
        }
        
    }
    
    if(value == "ASA")
    {
        
        if(localStorage.getItem("ASA_ACTIVE") == "false")
        {
            document.getElementById("ASA").src = "img/heartOn.png";
            localStorage.setItem("ASA_ACTIVE", "true");
            localStorage.setItem("ASA", "true");
        }else
        {
            document.getElementById("ASA").src = "img/heartOff.png";
            localStorage.setItem("ASA_ACTIVE", "false");
            localStorage.setItem("ASA", "false");
        }
        
    }
    
    if(value == "TCS")
    {
        
        if(localStorage.getItem("TCS_ACTIVE") == "false")
        {
            document.getElementById("TCS").src = "img/heartOn.png";
            localStorage.setItem("TCS_ACTIVE", "true");
            localStorage.setItem("TCS", "true");
        }else
        {
            document.getElementById("TCS").src = "img/heartOff.png";
            localStorage.setItem("TCS_ACTIVE", "false");
            localStorage.setItem("TCS", "false");
        }
        
    }
    
    if(value == "TCAF")
    {
        
        if(localStorage.getItem("TCAF_ACTIVE") == "false")
        {
            document.getElementById("TCAF").src = "img/heartOn.png";
            localStorage.setItem("TCAF_ACTIVE", "true");
            localStorage.setItem("TCAF", "true");
        }else
        {
            document.getElementById("TCAF").src = "img/heartOff.png";
            localStorage.setItem("TCAF_ACTIVE", "false");
            localStorage.setItem("TCAF", "false");
        }
        
    }
    
    if(value == "TCSA")
    {
        
        if(localStorage.getItem("TCSA_ACTIVE") == "false")
        {
            document.getElementById("TCSA").src = "img/heartOn.png";
            localStorage.setItem("TCSA_ACTIVE", "true");
            localStorage.setItem("TCSA", "true");
        }else
        {
            document.getElementById("TCSA").src = "img/heartOff.png";
            localStorage.setItem("TCSA_ACTIVE", "false");
            localStorage.setItem("TCSA", "false");
        }
        
    }
    
    if(value == "LOLF")
    {
        
        if(localStorage.getItem("LOLF_ACTIVE") == "false")
        {
            document.getElementById("LOLF").src = "img/heartOn.png";
            localStorage.setItem("LOLF_ACTIVE", "true");
            localStorage.setItem("LOLF", "true");
        }else
        {
            document.getElementById("LOLF").src = "img/heartOff.png";
            localStorage.setItem("LOLF_ACTIVE", "false");
            localStorage.setItem("LOLF", "false");
        }
        
    }
    
    if(value == "desktop")
    {
        
        if(localStorage.getItem("desktop_ACTIVE") == "false")
        {
            document.getElementById("desktop").src = "img/heartOn.png";
            localStorage.setItem("desktop_ACTIVE", "true");
            localStorage.setItem("desktop", "true");
        }else
        {
            document.getElementById("desktop").src = "img/heartOff.png";
            localStorage.setItem("desktop_ACTIVE", "false");
            localStorage.setItem("desktop", "false");
        }
        
    }
    
    if(value == "twitter")
    {
        
        if(localStorage.getItem("twitter_ACTIVE") == "false")
        {
            document.getElementById("twitter").src = "img/heartOn.png";
            localStorage.setItem("twitter_ACTIVE", "true");
            localStorage.setItem("twitter", "true");
        }else
        {
            document.getElementById("twitter").src = "img/heartOff.png";
            localStorage.setItem("twitter_ACTIVE", "false");
            localStorage.setItem("twitter", "false");
        }
        
    }
    
    
    //alert(localStorage.getItem("BCAN"));
}

function init_app()
{
	if(localStorage.getItem("first_time") == "true")
	{
		window.location = "opening_hub.html";
	}
}

/*
function init_app()
{
    alert("function");
    if(localStorage.getItem("first_time_opened") != "false")
    {
        window.location = "index.html";
        localStorage.setItem("first_time_opened", "false");
    }
    else if(localStorage.getItem("first_time_opened") == "false")
    {
        window.location = "start_menu.html";
    }
}
*/

function setup_profile()
{
    document.getElementById("name_container").innerHTML = localStorage.getItem("user_name");
    
    if(localStorage.getItem("BCAN") == "true")
    {
        var BCAN = document.createElement("span");
        BCAN.className = "charity_box normal_charity_box";
         BCAN.onclick = function(){
  window.open('https://49906.thankyou4caring.org/donatenow', '_blank', 'location=yes');
};
        BCAN.innerHTML = "<span class = 'small'>Bladder Cancer Advocacy Network</span>" + "<br />" + "<span class = 'smaller_under'>Type: Bladder Cancers</span>";
        document.getElementById("anchor_point").appendChild(BCAN);
        
    }
    
    if(localStorage.getItem("BCC") == "true")
    {
        var BCC = document.createElement("span");
        BCC.className = "charity_box normal_charity_box";
   BCC.onclick = function(){
  window.open('https://www.canadahelps.org/dn/4073', '_blank', 'location=yes');
};
        BCC.innerHTML = "<span class = 'small'>Bladder Cancer Canada</span>" + "<br />" + "<span class = 'smaller_under'>Type: Bladder Cancers</span>";
        document.getElementById("anchor_point").appendChild(BCC);
        
    }
    
    if(localStorage.getItem("LLS") == "true")
    {
        var BCAN = document.createElement("span");
        BCAN.className = "charity_box normal_charity_box";
         BCAN.onclick = function(){
  window.open('https://donate.lls.org/lls/donate', '_blank', 'location=yes');
};
        BCAN.innerHTML = "<span class = 'small'>Leukemia and Lymphoma Society</span>" + "<br />" + "<span class = 'smaller_under'>Type: Blood Cancers</span>";
        document.getElementById("anchor_point").appendChild(BCAN);
        
    }
    
    if(localStorage.getItem("LLR") == "true")
    {
        var BCAN = document.createElement("span");
        BCAN.className = "charity_box normal_charity_box";
         BCAN.onclick = function(){
  window.open('https://leukaemialymphomaresearch.org.uk/civicrm/contribute/transact?reset=1&id=5', '_blank', 'location=yes');
};
        BCAN.innerHTML = "<span class = 'small'>Leukemia & Lymphoma Research</span>" + "<br />" + "<span class = 'smaller_under'>Type: Blood Cancers</span>";
        document.getElementById("anchor_point").appendChild(BCAN);
        
    }
    
    if(localStorage.getItem("BCRT") == "true")
    {
        var BCAN = document.createElement("span");
        BCAN.className = "charity_box normal_charity_box";
         BCAN.onclick = function(){
  window.open('http://www.bonecancerresearch.org.uk/f_donate.php', '_blank', 'location=yes');
};
        BCAN.innerHTML = "<span class = 'small'>Bone Cancer Research Trust</span>" + "<br />" + "<span class = 'smaller_under'>Type: Blood Cancers</span>";
        document.getElementById("anchor_point").appendChild(BCAN);
        
    }
    
    if(localStorage.getItem("TSF") == "true")
    {
        var BCAN = document.createElement("span");
        BCAN.className = "charity_box normal_charity_box";
         BCAN.onclick = function(){
  window.open('https://secure.squarespace.com/commerce/donate?donatePageId=52b79f65e4b0ee585a53a209', '_blank', 'location=yes');
};
        BCAN.innerHTML = "<span class = 'small'>The Sunbeam Foundation</span>" + "<br />" + "<span class = 'smaller_under'>Type: Bone Cancers</span>";
        document.getElementById("anchor_point").appendChild(BCAN);
        
    }
    
    if(localStorage.getItem("ABTA") == "true")
    {
        var BCAN = document.createElement("span");
        BCAN.className = "charity_box normal_charity_box";
         BCAN.onclick = function(){
  window.open('https://secure2.convio.net/abta/site/Donation2;jsessionid=9DC62F7205DEAD22C1E17DE9966EEBA7.app272b?df_id=1500&1500.donation=form1', '_blank', 'location=yes');
};
        BCAN.innerHTML = "<span class = 'small'>American Brain Tumor Association</span>" + "<br />" + "<span class = 'smaller_under'>Type: Brain Cancers</span>";
        document.getElementById("anchor_point").appendChild(BCAN);
        
    }
    
    if(localStorage.getItem("NBTS") == "true")
    {
        var BCAN = document.createElement("span");
        BCAN.className = "charity_box normal_charity_box";
         BCAN.onclick = function(){
  window.open('https://secure2.convio.net/bts/site/Donation2?df_id=3940&3940.donation=form1#menu', '_blank', 'location=yes');
};
        BCAN.innerHTML = "<span class = 'small'>National Brain Tumor Society</span>" + "<br />" + "<span class = 'smaller_under'>Type: Brain Cancers</span>";
        document.getElementById("anchor_point").appendChild(BCAN);
        
    }
    
    if(localStorage.getItem("NBCF") == "true")
    {
        var BCAN = document.createElement("span");
        BCAN.className = "charity_box normal_charity_box";
         BCAN.onclick = function(){
  window.open('https://www.nationalbreastcancer.org/breast-cancer-donations', '_blank', 'location=yes');
};
        BCAN.innerHTML = "<span class = 'small'>National Breast Cancer Foundation</span>" + "<br />" + "<span class = 'smaller_under'>Type: Breast Cancers</span>";
        document.getElementById("anchor_point").appendChild(BCAN);
        
    }
    
    if(localStorage.getItem("BCRF") == "true")
    {
        var BCAN = document.createElement("span");
        BCAN.className = "charity_box normal_charity_box";
         BCAN.onclick = function(){
  window.open('https://give.bcrfcure.org/checkout/donation?eid=31404&_ga=1.239062789.448629387.1419877632', '_blank', 'location=yes');
};
        BCAN.innerHTML = "<span class = 'small'>Breast Cancer Research Foundation</span>" + "<br />" + "<span class = 'smaller_under'>Type: Breast Cancers</span>";
        document.getElementById("anchor_point").appendChild(BCAN);
        
    }
    
    if(localStorage.getItem("FCC") == "true")
    {
        var BCAN = document.createElement("span");
        BCAN.className = "charity_box normal_charity_box";
         BCAN.onclick = function(){
  window.open('https://give.fightcrc.org/checkout/donation?eid=26925', '_blank', 'location=yes');
};
        BCAN.innerHTML = "<span class = 'small'>Fight Colorectal Cancer</span>" + "<br />" + "<span class = 'smaller_under'>Type: Colorectal Cancers</span>";
        document.getElementById("anchor_point").appendChild(BCAN);
        
    }
    
    if(localStorage.getItem("NCCRA") == "true")
    {
        var BCAN = document.createElement("span");
        BCAN.className = "charity_box normal_charity_box";
         BCAN.onclick = function(){
  window.open('http://www.eifoundation.org/content/donate-nccra/', '_blank', 'location=yes');
};
        BCAN.innerHTML = "<span class = 'small'>The NCCRA</span>" + "<br />" + "<span class = 'smaller_under'>Type: Colorectal Cancers</span>";
        document.getElementById("anchor_point").appendChild(BCAN);
        
    }
    
    if(localStorage.getItem("FWC") == "true")
    {
        var BCAN = document.createElement("span");
        BCAN.className = "charity_box normal_charity_box";
         BCAN.onclick = function(){
  window.open('https://donatenow.networkforgood.org/FoundationForWomensCancer', '_blank', 'location=yes');
};
        BCAN.innerHTML = "<span class = 'small'>Foundation for Women's Cancer</span>" + "<br />" + "<span class = 'smaller_under'>Type: Endometrial Cancers</span>";
        document.getElementById("anchor_point").appendChild(BCAN);
        
    }
    
    if(localStorage.getItem("MKF") == "true")
    {
        var BCAN = document.createElement("span");
        BCAN.className = "charity_box normal_charity_box";
         BCAN.onclick = function(){
  window.open('https://secure3.convio.net/tmkf/site/Donation2;jsessionid=2C47305C279E144F55E17AE2AAA303B9.app303b?idb=360068408&DONATION_LEVEL_ID_SELECTED=1&df_id=1320&1320.donation=form1&idb=0', '_blank', 'location=yes');
};
        BCAN.innerHTML = "<span class = 'small'>The Mary Kay Foundation</span>" + "<br />" + "<span class = 'smaller_under'>Type: Endometrial Cancers</span>";
        document.getElementById("anchor_point").appendChild(BCAN);
        
    }
    
    if(localStorage.getItem("ETRF") == "true")
    {
        var BCAN = document.createElement("span");
        BCAN.className = "charity_box normal_charity_box";
         BCAN.onclick = function(){
  window.open('http://www.etrf.org/donate.html', '_blank', 'location=yes');
};
        BCAN.innerHTML = "<span class = 'small'>The Eye Tumor Research Foundation</span>" + "<br />" + "<span class = 'smaller_under'>Type: Eye Cancers</span>";
        document.getElementById("anchor_point").appendChild(BCAN);
        
    }
    
    if(localStorage.getItem("ECF") == "true")
    {
        var BCAN = document.createElement("span");
        BCAN.className = "charity_box normal_charity_box";
         BCAN.onclick = function(){
  window.open('https://www.eyecancer.com/donate', '_blank', 'location=yes');
};
        BCAN.innerHTML = "<span class = 'small'>The Eye Cancer Foundation</span>" + "<br />" + "<span class = 'smaller_under'>Type: Eye Cancers</span>";
        document.getElementById("anchor_point").appendChild(BCAN);
        
    }
    
    if(localStorage.getItem("FFLR") == "true")
    {
        var BCAN = document.createElement("span");
        BCAN.className = "charity_box normal_charity_box";
         BCAN.onclick = function(){
  window.open('http://www.liver-research.org.uk/liver-research-donations/donation.html', '_blank', 'location=yes');
};
        BCAN.innerHTML = "<span class = 'small'>The Foundation for Liver Research</span>" + "<br />" + "<span class = 'smaller_under'>Type: Liver Cancers</span>";
        document.getElementById("anchor_point").appendChild(BCAN);
        
    }
    
    if(localStorage.getItem("LCRF") == "true")
    {
        var BCAN = document.createElement("span");
        BCAN.className = "charity_box normal_charity_box";
         BCAN.onclick = function(){
  window.open('http://www.upmc.com/Services/liver-cancer/research/Pages/donate.aspx', '_blank', 'location=yes');
};
        BCAN.innerHTML = "<span class = 'small'>The Liver Cancer Research Fund</span>" + "<br />" + "<span class = 'smaller_under'>Type: Liver Cancers</span>";
        document.getElementById("anchor_point").appendChild(BCAN);
        
    }
    
    if(localStorage.getItem("HLF") == "true")
    {
        var BCAN = document.createElement("span");
        BCAN.className = "charity_box normal_charity_box";
         BCAN.onclick = function(){
  window.open('https://www3.thedatabank.com/dpg/508/spdf.asp?formid=donates', '_blank', 'location=yes');
};
        BCAN.innerHTML = "<span class = 'small'>A Breath of Hope Lung Foundation</span>" + "<br />" + "<span class = 'smaller_under'>Type: Lung Cancers</span>";
        document.getElementById("anchor_point").appendChild(BCAN);
        
    }
    
    if(localStorage.getItem("LCFA") == "true")
    {
        var BCAN = document.createElement("span");
        BCAN.className = "charity_box normal_charity_box";
         BCAN.onclick = function(){
  window.open('https://app.etapestry.com/hosted/LungCancerFoundationofAmer/OnlineDonation.html', '_blank', 'location=yes');
};
        BCAN.innerHTML = "<span class = 'small'>Lung Cancer Foundation of America</span>" + "<br />" + "<span class = 'smaller_under'>Type: Lung Cancers</span>";
        document.getElementById("anchor_point").appendChild(BCAN);
        
    }
    
    if(localStorage.getItem("LRF") == "true")
    {
        var BCAN = document.createElement("span");
        BCAN.className = "charity_box normal_charity_box";
         BCAN.onclick = function(){
  window.open('https://community.lymphoma.org/', '_blank', 'location=yes');
};
        BCAN.innerHTML = "<span class = 'small'>Lymphoma Research Foundation</span>" + "<br />" + "<span class = 'smaller_under'>Type: Lymphatic Cancers</span>";
        document.getElementById("anchor_point").appendChild(BCAN);
        
    }
    
    if(localStorage.getItem("LFA") == "true")
    {
        var BCAN = document.createElement("span");
        BCAN.className = "charity_box normal_charity_box";
         BCAN.onclick = function(){
  window.open('https://www.givedirect.org/give/givefrm.asp?CID=10146', '_blank', 'location=yes');
};
        BCAN.innerHTML = "<span class = 'small'>Lymphoma Foundation of America</span>" + "<br />" + "<span class = 'smaller_under'>Type: Lymphatic Cancers</span>";
        document.getElementById("anchor_point").appendChild(BCAN);
        
    }
    
    if(localStorage.getItem("OCF") == "true")
    {
        var BCAN = document.createElement("span");
        BCAN.className = "charity_box normal_charity_box";
         BCAN.onclick = function(){
  window.open('https://donate.oralcancer.org/index.cfm?fuseaction=donate.general', '_blank', 'location=yes');
};
        BCAN.innerHTML = "<span class = 'small'>The Oral Cancer Foundation</span>" + "<br />" + "<span class = 'smaller_under'>Type: Oral Cancers</span>";
        document.getElementById("anchor_point").appendChild(BCAN);
        
    }
    
    if(localStorage.getItem("MCF") == "true")
    {
        var BCAN = document.createElement("span");
        BCAN.className = "charity_box normal_charity_box";
         BCAN.onclick = function(){
  window.open('http://www.mouthcancerfoundation.org/get-involved/donate-mouth-cancer-foundation', '_blank', 'location=yes');
};
        BCAN.innerHTML = "<span class = 'small'>The Mouth Cancer Foundation</span>" + "<br />" + "<span class = 'smaller_under'>Type: Oral Cancers</span>";
        document.getElementById("anchor_point").appendChild(BCAN);
        
    }
    
    if(localStorage.getItem("OCRF") == "true")
    {
        var BCAN = document.createElement("span");
        BCAN.className = "charity_box normal_charity_box";
         BCAN.onclick = function(){
  window.open('https://www.kintera.org/AutoGen/Simple/Donor.asp?ievent=475938&en=4nLxHFMfG3LGKPOiE2LDKLOsFhLKKSMuFfIKKYOALrE', '_blank', 'location=yes');
};
        BCAN.innerHTML = "<span class = 'small'>The Ovarian Cancer Research Fund</span>" + "<br />" + "<span class = 'smaller_under'>Type: Ovarian Cancers</span>";
        document.getElementById("anchor_point").appendChild(BCAN);
        
    }
    
    if(localStorage.getItem("NOCC") == "true")
    {
        var BCAN = document.createElement("span");
        BCAN.className = "charity_box normal_charity_box";
         BCAN.onclick = function(){
  window.open('https://secure.2dialog.com/ovarian/main.php/micro_sites/showpage/id/99', '_blank', 'location=yes');
};
        BCAN.innerHTML = "<span class = 'small'>National Ovarian Cancer Coalition</span>" + "<br />" + "<span class = 'smaller_under'>Type: Ovarian Cancers</span>";
        document.getElementById("anchor_point").appendChild(BCAN);
        
    }
    
    if(localStorage.getItem("LF") == "true")
    {
        var BCAN = document.createElement("span");
        BCAN.className = "charity_box normal_charity_box";
         BCAN.onclick = function(){
  window.open('https://www.lustgarten.org/donate', '_blank', 'location=yes');
};
        BCAN.innerHTML = "<span class = 'small'>The Lustgarten Foundation</span>" + "<br />" + "<span class = 'smaller_under'>Type: Pancreatic Cancers</span>";
        document.getElementById("anchor_point").appendChild(BCAN);
        
    }
    
    if(localStorage.getItem("PCAN") == "true")
    {
        var BCAN = document.createElement("span");
        BCAN.className = "charity_box normal_charity_box";
         BCAN.onclick = function(){
  window.open('https://www.pancan.org/donate-now/', '_blank', 'location=yes');
};
        BCAN.innerHTML = "<span class = 'small'>Pancreatic Cancer Action Network</span>" + "<br />" + "<span class = 'smaller_under'>Type: Pancreatic Cancers</span>";
        document.getElementById("anchor_point").appendChild(BCAN);
        
    }
    
    if(localStorage.getItem("SCF") == "true")
    {
        var BCAN = document.createElement("span");
        BCAN.className = "charity_box normal_charity_box";
         BCAN.onclick = function(){
  window.open('https://interland3.donorperfect.net/weblink/weblink.aspx?name=skincancer&id=16', '_blank', 'location=yes');
};
        BCAN.innerHTML = "<span class = 'small'>The Skin Cancer Foundation</span>" + "<br />" + "<span class = 'smaller_under'>Type: Skin Cancers</span>";
        document.getElementById("anchor_point").appendChild(BCAN);
        
    }
    
    if(localStorage.getItem("ASA") == "true")
    {
        var BCAN = document.createElement("span");
        BCAN.className = "charity_box normal_charity_box";
         BCAN.onclick = function(){
  window.open('http://www.americanskin.org/donate/', '_blank', 'location=yes');
};
        BCAN.innerHTML = "<span class = 'small'>The American Skin Foundation</span>" + "<br />" + "<span class = 'smaller_under'>Type: Skin Cancers</span>";
        document.getElementById("anchor_point").appendChild(BCAN);
        
    }
    
    if(localStorage.getItem("TCS") == "true")
    {
        var BCAN = document.createElement("span");
        BCAN.className = "charity_box normal_charity_box";
         BCAN.onclick = function(){
  window.open('http://www.testicularcancersociety.org/donate.html', '_blank', 'location=yes');
};
        BCAN.innerHTML = "<span class = 'small'>The Testicular Cancer Society</span>" + "<br />" + "<span class = 'smaller_under'>Type: Testicular Cancers</span>";
        document.getElementById("anchor_point").appendChild(BCAN);
        
    }
    
    if(localStorage.getItem("TCAF") == "true")
    {
        var BCAN = document.createElement("span");
        BCAN.className = "charity_box normal_charity_box";
         BCAN.onclick = function(){
  window.open('http://www.testicularcancerawarenessfoundation.org/donation-opportunities', '_blank', 'location=yes');
};
        BCAN.innerHTML = "<span class = 'small'>TCAF</span>" + "<br />" + "<span class = 'smaller_under'>Type: Testicular Cancers</span>";
        document.getElementById("anchor_point").appendChild(BCAN);
        
    }
    
 
    
    if(localStorage.getItem("TCSA") == "true")
    {
        var BCAN = document.createElement("span");
        BCAN.className = "charity_box normal_charity_box";
         BCAN.onclick = function(){
  window.open('https://tcsa.memberclicks.net/index.php?option=com_mc&view=formlogin&form=84782&return=L2luZGV4LnBocD9vcHRpb249Y29tX21jJnZpZXc9bWMmbWNpZD1mb3JtXzg0NzgyP3NlcnZJZD0zMzU5Jm9wdGlvbj1jb21fbWMmdmlldz1tYyZtY2lkPWZvcm1fODQ3ODI=', '_blank', 'location=yes');
};
        BCAN.innerHTML = "<span class = 'small'>TCSA</span>" + "<br />" + "<span class = 'smaller_under'>Type: Thyroid Cancers</span>";
        document.getElementById("anchor_point").appendChild(BCAN);
        
    }
    
    if(localStorage.getItem("LOLF") == "true")
    {
        var BCAN = document.createElement("span");
        BCAN.className = "charity_box normal_charity_box";
         BCAN.onclick = function(){
  window.open('http://www.lightoflifefoundation.org/Ways-to-Help/Donate', '_blank', 'location=yes');
};
        BCAN.innerHTML = "<span class = 'small'>Light of Life Foundation</span>" + "<br />" + "<span class = 'smaller_under'>Type: Thyroid Cancers</span>";
        document.getElementById("anchor_point").appendChild(BCAN);
        
    }
    
    if(localStorage.getItem("desktop") == "true")
    {
        var BCAN = document.createElement("span");
        BCAN.className = "charity_box normal_charity_box";
         BCAN.onclick = function(){
  window.open('http://thecureitproject.com/', '_blank', 'location=yes');
};
        BCAN.innerHTML = "<span class = 'small'>Desktop Site</span>" + "<br />" + "<span class = 'smaller_under'>Type: Other</span>";
        document.getElementById("anchor_point").appendChild(BCAN);
        
    }
    
    if(localStorage.getItem("twitter") == "true")
    {
        var BCAN = document.createElement("span");
        BCAN.className = "charity_box normal_charity_box";
         BCAN.onclick = function(){
  window.open('https://twitter.com/?utm_source=google&utm_medium=cpc&utm_campaign=PFX_SEM_GW_US_EVERGREEN_TIER%201_EXACT_LPTESTLOHP&utm_content=Twitter&utm_term=twiter&gclid=CLLEtua-_MgCFQ-EaQodLdANaA&gclsrc=aw.ds', '_blank', 'location=yes');
};
        BCAN.innerHTML = "<span class = 'small'>Tweet it Out</span>" + "<br />" + "<span class = 'smaller_under'>Type: Other</span>";
        document.getElementById("anchor_point").appendChild(BCAN);
        
    }
    
}

$(function() {

    var $body = $(document);
    $body.bind('scroll', function() {
        // "Disable" the horizontal scroll.
        if ($body.scrollLeft() !== 0) {
            $body.scrollLeft(0);
        }
    });

});

function incrementDisease(diseaseName){
	totalDiseasePages = 17; 
	firstTime = localStorage.getItem(diseaseName);

	if (firstTime == null || firstTime == "null"){
		j = 0;
	} else {
		j = parseInt(firstTime);
	}

	j++;

	if (j==1){
		pagesVisited = localStorage.getItem("countDiseases");


		if (pagesVisited == null || pagesVisited == "null"){
			i = 0;
		} else {
			i = parseInt(pagesVisited);
		}

		i++;

		if (i/totalDiseasePages > 0.25 && i/totalDiseasePages < 0.5){
			
			tfhappened = localStorage.getItem("tfDiseases");

			if (tfhappened == null || tfhappened == "null"){
				tfcount = 0;
			} else {
				tfcount = parseInt(tfhappened);
			}

			tfcount++;

			if (tfcount == 1){
				badgeAnimation("25.png", "You earned this badge for viewing 25% percent of disease pages!");
			}

			localStorage.setItem("tfDiseases", tfcount);
		}

		if (i/totalDiseasePages > 0.50 && i/totalDiseasePages < 0.75){

			fhappened = localStorage.getItem("fDiseases");

			if (fhappened == null || fhappened == "null"){
				fcount = 0;
			} else {
				fcount = parseInt(fhappened);
			}

			fcount++;

			if (fcount == 1){
				badgeAnimation("50.png", "You earned this badge for viewing 50% percent of disease pages!");
			}

			localStorage.setItem("fDiseases", fcount);
		}

		if (i/totalDiseasePages > 0.75 && i/totalDiseasePages < 1){

			sfhappened = localStorage.getItem("sfDiseases");

			if (sfhappened == null || sfhappened == "null"){
				sfcount = 0;
			} else {
				sfcount = parseInt(sfhappened);
			}

			sfcount++;

			if (sfcount == 1){
				badgeAnimation("75.png", "You earned this badge for viewing 75% percent of disease pages!");
			}

			localStorage.setItem("sfDiseases", sfcount);
		}

		if (i/totalDiseasePages == 1){
			hundohappened = localStorage.getItem("hundoDiseases");

			if (hundohappened == null || hundohappened == "null"){
				hundocount = 0;
			} else {
				hundocount = parseInt(hundohappened);
			}

			hundocount++;

			if (hundocount == 1){
				badgeAnimation("100.png", "You earned this badge for viewing all of the disease pages!");
			}

			localStorage.setItem("hundoDiseases", hundocount);
		}

		localStorage.setItem("countDiseases", i);
	}

	localStorage.setItem(diseaseName, j);
}

function incrementStory(personName){
	totalStories = 7;
	firstTime = localStorage.getItem(personName);

	if (firstTime == null || firstTime == "null"){
		j = 0;
	} else {
		j = parseInt(firstTime);
	}

	j++

	if (j==1){
		pagesVisited = localStorage.getItem("countStories");


		if (pagesVisited == null || pagesVisited == "null"){
			i = 0;
		} else {
			i = parseInt(pagesVisited);
		}

		i++;

		if (i/totalStories >= 0.25 && i/totalStories < 0.5){
			
			tfhappened = localStorage.getItem("tfStories");

			if (tfhappened == null || tfhappened == "null"){
				tfcount = 0;
			} else {
				tfcount = parseInt(tfhappened);
			}

			tfcount++;

			if (tfcount == 1){
				badgeAnimation("25.png", "You earned this badge for viewing 25% percent of stories pages!");
			}

			localStorage.setItem("tfStories", tfcount);
		}

		if (i/totalStories >= 0.50 && i/totalStories < 0.75){

			fhappened = localStorage.getItem("fStories");

			if (fhappened == null || fhappened == "null"){
				fcount = 0;
			} else {
				fcount = parseInt(fhappened);
			}

			fcount++;

			if (fcount == 1){
				badgeAnimation("50.png", "You earned this badge for viewing 50% percent of stories pages!");
			}

			localStorage.setItem("fStories", fcount);
		}

		if (i/totalStories >= 0.75 && i/totalStories < 1){

			sfhappened = localStorage.getItem("sfStories");

			if (sfhappened == null || sfhappened == "null"){
				sfcount = 0;
			} else {
				sfcount = parseInt(sfhappened);
			}

			sfcount++;

			if (sfcount == 1){
				badgeAnimation("75.png", "You earned this badge for viewing 75% percent of stories pages!");
			}

			localStorage.setItem("sfStories", sfcount);
		}

		if (i/totalStories == 1){
			hundohappened = localStorage.getItem("hundoStories");

			if (hundohappened == null || hundohappened == "null"){
				hundocount = 0;
			} else {
				hundocount = parseInt(hundohappened);
			}

			hundocount++;

			if (hundocount == 1){
				badgeAnimation("100.png", "You earned this badge for viewing all of the stories pages!");
			}

			localStorage.setItem("hundoStories", hundocount);
		}

		localStorage.setItem("countStories", i);
	}

	localStorage.setItem(personName, j);

}

function incrementResources(resourceName){
	totalResources = 32;
	firstTime = localStorage.getItem(resourceName);

	if (firstTime == null || firstTime == "null"){
		j = 0;
	} else {
		j = parseInt(firstTime);
	}

	j++;

	if (j==1){
		pagesVisited = localStorage.getItem("countResources");


		if (pagesVisited == null || pagesVisited == "null"){
			i = 0;
		} else {
			i = parseInt(pagesVisited);
		}

		i++;

		if (i/totalResources >= 0.25 && i/totalResources < 0.5){
			
			tfhappened = localStorage.getItem("tfResources");

			if (tfhappened == null || tfhappened == "null"){
				tfcount = 0;
			} else {
				tfcount = parseInt(tfhappened);
			}

			tfcount++;

			if (tfcount == 1){
				badgeAnimation("25.png", "You earned this badge for viewing 25% percent of resource pages!");
			}

			localStorage.setItem("tfResources", tfcount);
		}

		if (i/totalResources >= 0.50 && i/totalResources < 0.75){

			fhappened = localStorage.getItem("fResources");

			if (fhappened == null || fhappened == "null"){
				fcount = 0;
			} else {
				fcount = parseInt(fhappened);
			}

			fcount++;

			if (fcount == 1){
				badgeAnimation("50.png", "You earned this badge for viewing 50% percent of resource pages!");
			}

			localStorage.setItem("fResources", fcount);
		}

		if (i/totalResources >= 0.75 && i/totalResources < 1){

			sfhappened = localStorage.getItem("sfResources");

			if (sfhappened == null || sfhappened == "null"){
				sfcount = 0;
			} else {
				sfcount = parseInt(sfhappened);
			}

			sfcount++;

			if (sfcount == 1){
				badgeAnimation("75.png", "You earned this badge for viewing 75% percent of resource pages!");
			}

			localStorage.setItem("sfResources", sfcount);
		}

		if (i/totalResources == 1){
			hundohappened = localStorage.getItem("hundoResources");

			if (hundohappened == null || hundohappened == "null"){
				hundocount = 0;
			} else {
				hundocount = parseInt(hundohappened);
			}

			hundocount++;

			if (hundocount == 1){
				badgeAnimation("100.png", "You earned this badge for viewing all of the resource pages!");
			}

			localStorage.setItem("hundoResources", hundocount);
		}

		localStorage.setItem("countResources", i);
	}

	localStorage.setItem(resourceName, j);

}

/*
 *there was no point in me writing this method because i think you've already implemented it in the bloody code.
 *i've commented this out and also the script tags that calls this method in the index.html file. Should you wish to use
 *my code simply remove your code and uncomment out my code. Cheers!
 */
 
function firstTime(){
	firstTime = localStorage.getItem("virgin");

	if (firstTime == null || firstTime == "null"){
		j = 0;
	} else {
		j = parseInt(firstTime);
	}

	j++;

	if (j != 1){
		window.open("opening_hub.html");
	}

	localStorage.setItem("virgin", j);
}

function badgeAnimation(url, titles){
    swal({
        title: titles,
        text: "You've earned a badge.",
        imageUrl: url
    });
}