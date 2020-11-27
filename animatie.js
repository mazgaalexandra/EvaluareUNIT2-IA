<script>
var slideIndex = 0;

function Slideshow() 
{
  var a;
  var imagini = document.getElementsByClassName("mySlides") ;

  for ( a = 0; a < imagini; a++ ) 
{ 
  imagini[a].style.display = "none" ; 
}

 slideIndex++;
 if (slideIndex > imagini.lenght) 
     {slideIndex = 1}
 imagini[slideIndex-1].style.display="block";
 setTimeout(Slideshow,3000);
</script>