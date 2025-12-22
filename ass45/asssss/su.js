
<button id="toggleBtn">Toggle Box</button>
<div id="box" style="width:100px;height:100px;background:rgb(234, 142, 5);"></div>

<script>
$("#toggleBtn").click(function(){
  $("#box").toggle(500);
});
</script>