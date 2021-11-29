
var images = ["https://i.ibb.co/8md2LyS/cat.jpg", "https://i.ibb.co/ZYV9RnH/dog-1.jpg", "https://i.ibb.co/VCkhX4M/grandma.jpg", "https://i.ibb.co/c8867dt/cat.jpg" ,"https://i.ibb.co/PG1c6MN/jd.jpg" ,"https://i.ibb.co/wsMm3h2/hgj.jpg","https://i.ibb.co/MRFC848/dog2.jpg" ,"https://i.ibb.co/zXNF4p8/tata.jpg", "https://i.ibb.co/LQBWbYQ/Mom.jpg", "https://i.ibb.co/mhW71Dx/aditi.jpg", "https://i.ibb.co/GcWQ5tG/BRO.jpg"];
var names = ["cat", "dog", "grandma", "cat" ,"UNCLE" , "Aunt","dog", "tata","mom","me" ,"Brother"];
var i = 0;

function update(){
  var array_length = images.length - 1;
  var updated_image = images[i];
  var updated_text = names[i];
  document.getElementById("family_book_image").src = updated_image;
  document.getElementById("name").innerHTML = updated_text;
  i++;
  if(i>array_length){
  i = 0;
                
  }
}