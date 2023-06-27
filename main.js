window.addEventListener('scroll',() => {
    document.querySelector("nav").classList.toggle ('window-scroll',window.scrollY>0)
})

const swiper = new Swiper('.swiper', {

    speed:3000,
    autoplay:{ 
      delay:3000,
      disableOnInteraction:false,
    },
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });

  let typewriterText = document.getElementById("typewriter-text");
  if (typewriterText) {
    setInterval(function() {
      typewriterText.style.animation ="none";
      setTimeout(function() {
        typewriterText.style.animation ="typing 8s steps(31)  infinite ";
      }, 2000);
    }, 10000);
  } else {
    console.error("Element with ID 'typewriter-text' not found.");
  }
  

  
    //show/hide nav menu
    
    const menu=document.querySelector(".nav__menu");
    const menuBtn=document.querySelector("#open-menu-btn");
    const closeBtn=document.querySelector("#close-menu-btn");

    menuBtn.addEventListener('click',()=>{
      menu.style.display="flex";
      closeBtn.style.display="inline-block";
      menuBtn.style.display="none";
    })
    //close nav menu
    const closeNav= ()=> {
      menu.style.display="none";
      closeBtn.style.display="none";
      menuBtn.style.display="inline-block";
    }

    closeBtn.addEventListener('click',closeNav) ;


    var TechSlider = new Swiper('.swiper-container', {
      effect: 'coverflow',
      centeredSlides:true ,
      slidesPerView: 'auto',
      clickable:true,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth:100 ,
        modifier:2,
        slideShadows:false,
      },
      loop:true,
      speed:1400,
      pagination: {
        el: '.swiper-pagination',
        clickable:true,
      },
    
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      

    });


   

  

    function sendWhatsAppMessage(event) {
      event.preventDefault();
  
      // Get form inputs
      const name = document.getElementById('name').value;
      const phone = document.getElementById('phone').value;
      const location = document.getElementById('location').value;
  
      // Construct message
      let message = `Name: ${name}\nPhone Number: ${phone}\nLocation: ${location}`;
  
      // Limit message to 4096 characters
      message = message.slice(0, 4096);
  
      // Encode message for URL
      message = encodeURIComponent(message);
  
      // Redirect to WhatsApp
      window.location.href = `https://wa.me/9947124555/?text=${message}`;
  }
  


    

    function toggleLanguage1() {
      var toggle1 = document.getElementById("toggle1");
      var content = document.getElementById("content");
 
      if (toggle1.checked == true) {
        if (window.matchMedia("(max-width: 600px)").matches){
        content.innerHTML = "<span style='font-size: 8.5px;'>നൂറു ശതമാനം പ്രായോഗിക അധിഷ്ഠിതമാണ് ടെക്‌നിറ്റി സ്മാർട്ട്ഫോൺ ആൻഡ് ലാപ്ടോപ്പ് ചിപ്പ് ലെവൽ ട്രെയിനിങ് ഇൻസ്റ്റിറ്റ്യൂട്ടിലെ ക്ലാസ്സുകൾ. ലോകോത്തര നിലവാരത്തിലുള്ള മെഷിനെറികളും സോഫ്റ്റ്‌വെയറുകളും അടങ്ങിയ ഹൈടെക് ലാബാണ് ഇതിനായി സജ്ജീകരിച്ചിട്ടുള്ളത് .  സമാർട്ഫോൺ ആൻഡ് ലാപ്ടോപ് സർവീസ് മേഖലയിൽ ഒന്നര  പതിറ്റാൻഡ് പരിഞ്ജനമുള്ള വിധക്ദ്ധരായ ഫാക്കൾട്ടികളാണ് ക്ലാസുകൾ നയിക്കുന്നത്.ക്ലാസ്സ്‌ മുറിയിലും ലാബിലും പഠനം ഒതുക്കി നിർത്താതെ  പരിശീലനവും , മെയിന്റനൻസ്,സർവീസ് മേഖലയിൽ നിന്നുള്ള പ്രായോഗിക പറിഞ്ജനത്തിലൂടെ മികച്ച ടെക്‌നിഷ്യൻ ആയി വിദ്യാർത്ഥിയെ വാർത്തെടുക്കുക എന്ന ലക്ഷ്യം ആണ് ടെക്‌നിറ്റിക്കുള്ളത്.    ഇൻസ്റ്റിറ്റ്യൂട്ടിൽ നിന്നും പഠനം കഴിഞ്ഞാലും വിദ്യാർത്ഥിയോടുള്ള ഉത്തരവാദിത്വം അവസാനിപ്പിക്കില്ല എന്നതാണ് ടെക്‌നിറ്റി ഇൻസറ്റിറ്റ്യൂട്ട്     എന്ന സ്ഥാപനത്തെ വേറിട്ട് നിർത്തുന്നത്. സ്വന്തമായി സ്ഥാപനം തുടങ്ങാൻ  ആഗ്രഹിക്കുന്നവർക് അതിനാവശ്യമായ എല്ലാവിധ സഹായങ്ങളും  ഉപദേശ നിർദേശങ്ങളുമെല്ലാം നൽകുന്നു , ഒപ്പം തൊഴിൽ മേഖലയിൽ  നിന്നുള്ള സംശയങ്ങളെ ടെക്‌നിറ്റിയിലെ ഫാക്കൾട്ടികളെ ബന്ധപ്പെട്ട്ദുരീകരിക്കുന്നതിനുള്ള സൗഹൃദകരമായ അന്തരീക്ഷം കൂടി സ്ഥാപനം  നിലനിർത്തി പോരുന്നു. സ്മാർട്ട്ഫോൺ, ലാപ്ടോപ് ചിപ്പ് ലെവൽ ട്രെയിനിങ് രംഗത്ത് മികച്ച പ്രവർത്തനം കാഴ്ചവെക്കുന്ന ടെക്‌നിറ്റി ഇന്സ്ടിട്യൂട്ടിൽ നിന്നും പഠിച്ചിറങ്ങിയ നിരവധി പേർ ഇന്ത്യക്ക് അകത്തും  പുറത്തുമായി നല്ല രീതിയിൽ തൊഴിൽ ജീവിതം നയിച്ചു വരുന്നു."; // Replace with your translated content
        }else{
          content.innerHTML = "<span style='font-size: 13.5px;'>നൂറു ശതമാനം പ്രായോഗിക അധിഷ്ഠിതമാണ് ടെക്‌നിറ്റി സ്മാർട്ട്ഫോൺ ആൻഡ് ലാപ്ടോപ്പ് ചിപ്പ് ലെവൽ ട്രെയിനിങ് ഇൻസ്റ്റിറ്റ്യൂട്ടിലെ ക്ലാസ്സുകൾ. ലോകോത്തര നിലവാരത്തിലുള്ള മെഷിനെറികളും സോഫ്റ്റ്‌വെയറുകളും അടങ്ങിയ ഹൈടെക് ലാബാണ് ഇതിനായി സജ്ജീകരിച്ചിട്ടുള്ളത് .  സമാർട്ഫോൺ ആൻഡ് ലാപ്ടോപ് സർവീസ് മേഖലയിൽ ഒന്നര  പതിറ്റാൻഡ് പരിഞ്ജനമുള്ള വിധക്ദ്ധരായ ഫാക്കൾട്ടികളാണ് ക്ലാസുകൾ നയിക്കുന്നത്.ക്ലാസ്സ്‌ മുറിയിലും ലാബിലും പഠനം ഒതുക്കി നിർത്താതെ  പരിശീലനവും , മെയിന്റനൻസ്,സർവീസ് മേഖലയിൽ നിന്നുള്ള പ്രായോഗിക പറിഞ്ജനത്തിലൂടെ മികച്ച ടെക്‌നിഷ്യൻ ആയി വിദ്യാർത്ഥിയെ വാർത്തെടുക്കുക എന്ന ലക്ഷ്യം ആണ് ടെക്‌നിറ്റിക്കുള്ളത്.    ഇൻസ്റ്റിറ്റ്യൂട്ടിൽ നിന്നും പഠനം കഴിഞ്ഞാലും വിദ്യാർത്ഥിയോടുള്ള ഉത്തരവാദിത്വം അവസാനിപ്പിക്കില്ല എന്നതാണ് ടെക്‌നിറ്റി ഇൻസറ്റിറ്റ്യൂട്ട്     എന്ന സ്ഥാപനത്തെ വേറിട്ട് നിർത്തുന്നത്. സ്വന്തമായി സ്ഥാപനം തുടങ്ങാൻ  ആഗ്രഹിക്കുന്നവർക് അതിനാവശ്യമായ എല്ലാവിധ സഹായങ്ങളും  ഉപദേശ നിർദേശങ്ങളുമെല്ലാം നൽകുന്നു , ഒപ്പം തൊഴിൽ മേഖലയിൽ  നിന്നുള്ള സംശയങ്ങളെ ടെക്‌നിറ്റിയിലെ ഫാക്കൾട്ടികളെ ബന്ധപ്പെട്ട്ദുരീകരിക്കുന്നതിനുള്ള സൗഹൃദകരമായ അന്തരീക്ഷം കൂടി സ്ഥാപനം  നിലനിർത്തി പോരുന്നു. സ്മാർട്ട്ഫോൺ, ലാപ്ടോപ് ചിപ്പ് ലെവൽ ട്രെയിനിങ് രംഗത്ത് മികച്ച പ്രവർത്തനം കാഴ്ചവെക്കുന്ന ടെക്‌നിറ്റി ഇന്സ്ടിട്യൂട്ടിൽ നിന്നും പഠിച്ചിറങ്ങിയ നിരവധി പേർ ഇന്ത്യക്ക് അകത്തും  പുറത്തുമായി നല്ല രീതിയിൽ തൊഴിൽ ജീവിതം നയിച്ചു വരുന്നു.";
        }
      } else {
        if (window.matchMedia("(max-width: 600px)").matches){
        content.innerHTML = "<span style='font-size: 0.7rem;'>The classes at Technity Smartphone and Laptop Chip Level Training Institute is 100% practical oriented. A high-tech lab with world-class machinery and software has been set up for this purpose. The classes are conducted by expert faculties with one and half decades of experience in the field of Smartphone and Laptop services.Technity aims to mold the student into an excellent technician through hands-on experience not only in the classroom and lab but also in the maintenance and service fields. What sets Technity Institute apart is that the responsibility towards the student continues even after graduation from the institute. The institute provides all the necessary help and advice to those who want to start their own business and maintains a friendly atmosphere to clear the doubts about the career field related to faculty technique. A number of graduates from Technity institute are doing great work in the field of Smartphone and Laptop Chip Level training and are leading successful careers in India and abroad.";
      }else{
         content.innerHTML = "<span style='font-size: 1rem;'>The classes at Technity Smartphone and Laptop Chip Level Training Institute is 100% practical oriented. A high-tech lab with world-class machinery and software has been set up for this purpose. The classes are conducted by expert faculties with one and half decades of experience in the field of Smartphone and Laptop services.Technity aims to mold the student into an excellent technician through hands-on experience not only in the classroom and lab but also in the maintenance and service fields. What sets Technity Institute apart is that the responsibility towards the student continues even after graduation from the institute. The institute provides all the necessary help and advice to those who want to start their own business and maintains a friendly atmosphere to clear the doubts about the career field related to faculty technique. A number of graduates from Technity institute are doing great work in the field of Smartphone and Laptop Chip Level training and are leading successful careers in India and abroad.";}
          }}

       
          
  
          



          function toggleLanguage2() {

            var toggle = document.getElementById("toggle2");
            var content = document.getElementById("content2");

            if (toggle.checked == true) {
              if (window.matchMedia("(max-width: 600px)").matches){
              content.innerHTML = "<span style='font-size: 9.5px;'>ലോകത്തെവിടെയും മികച്ച താഴിലവസരമുള്ള സ്മാർട്ട് ഫോൺ സർവീസ് എഞ്ചിനീയറിഗ്, ലാപ് ടോപ് ചിപ്പ് ലെവൽ സർവീസ് എഞ്ചിനീയറിഗ്, സിസിടിവി &amp; സെക്യൂരിറ്റി സിസ്റ്റം എന്നി കോഴ്സുകൾ ചുരുങ്ങിയ ചിലവിൽ സാധ്യമാക്കുകയാണ് ടെക്‌നിറ്റി ഇൻസ്റ്റിറ്റ്യൂട്ട്. നൂറ് ശതമാനം ജോലി സാധ്യതയോടൊപ്പം സ്വയം തൊഴിലായി സ്വീകരിക്കാനും ഉത്തമമാണ് ഈ മൂന്ന് കോഴ്സുകൾ"; // Replace with your translated content
              }else{
                 content.innerHTML = "<span style='font-size: 13.5px;'>ലോകത്തെവിടെയും മികച്ച താഴിലവസരമുള്ള സ്മാർട്ട് ഫോൺ സർവീസ് എഞ്ചിനീയറിഗ്, ലാപ് ടോപ് ചിപ്പ് ലെവൽ സർവീസ് എഞ്ചിനീയറിഗ്, സിസിടിവി &amp; സെക്യൂരിറ്റി സിസ്റ്റം എന്നി കോഴ്സുകൾ ചുരുങ്ങിയ ചിലവിൽ സാധ്യമാക്കുകയാണ് ടെക്‌നിറ്റി ഇൻസ്റ്റിറ്റ്യൂട്ട്. നൂറ് ശതമാനം ജോലി സാധ്യതയോടൊപ്പം സ്വയം തൊഴിലായി സ്വീകരിക്കാനും ഉത്തമമാണ് ഈ മൂന്ന് കോഴ്സുകൾ";}
            } else {    
              if (window.matchMedia("(max-width: 600px)").matches){
              content.innerHTML = "<span style='font-size: 0.8rem;'>Technity Institute provides courses like Smartphone Service Engineering, Laptop Chip Level Service Engineering, and CCTV &amp; Security System at a low cost. These courses will ensure job opportunities all over the world. All these three courses are suitable for self employment with 100% employment prospects.";
              }else{
                content.innerHTML = "<span style='font-size: 1rem;'>Technity Institute provides courses like Smartphone Service Engineering, Laptop Chip Level Service Engineering, and CCTV &amp; Security System at a low cost. These courses will ensure job opportunities all over the world. All these three courses are suitable for self employment with 100% employment prospects.";
              }
             
                }}



               
                
                
                
                
                 
                
                
                
                
                
                
                
  


                
                
                
  
  