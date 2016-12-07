
window.onload = function(){
	initialize();
 }

function initialize() {
	
 	var conteneur = document.getElementById("content");
	var avancer = document.getElementById("avancer");
	var init = document.getElementById("init");
	var bout_0 = document.getElementById("bouton_0");
	var bout_l = document.getElementById("bouton_l");
	var etape = 0; 
	
	bout_0.onclick = function(){
		this.style.display = "none";
		d3.select("#fond_gris").transition().duration(1500).style("opacity","0");
		setTimeout(function(){
			d3.select("#content").style("display", "block").style("opacity", 1);
			d3.select("#fonds").selectAll("g").transition().duration(1500).attr("opacity",0.2)
			d3.select("#fonds").selectAll(".a2").style("transform","translate(-30px)")
			d3.select("#anime").selectAll(".d2").style("transform","translate(-30px)")
			d3.select("#rules").style("display","block")			
		},500);
	}
	
	bout_l.onclick = function(){
		d3.select("#fond_gris").style("display","none");
		d3.select("#avancer").style("display","inline");
		d3.select("#rules").transition().duration(1000).style("margin-left","780px").style("margin-top","-100px").style("font-size", "12px").selectAll("p").style("margin","2px");
		d3.select("#rules").selectAll("img").transition().duration(1000).style("width","15px");
		d3.select("#bouton_l").transition().duration(1000).style("opacity","0");
		d3.select("#bouton_l").transition().delay(1000).style("display","none");
		
	}
	init.onclick = function(){
		var centre = document.getElementById("revol").attributes.centre.value;
		var centre2 = document.getElementById("roue_a").attributes.centre.value;
		
		etape = 0;
		d3.select("#content").transition().duration(1000).style("opacity", 0)
		document.getElementById("commentaire").innerHTML = "";
		
		d3.select("#avancer").attr("class","bouts on");
		d3.select("#avancer").style("display","inline");
		d3.select("#init").attr("class","bouts on");
		d3.select("#divBouton").append("div").attr("id","cache")
		
		d3.select("#divBouton").append("p").attr("id","decompte").html("3")
		
		d3.select("#revol").style("transform-origin", centre).attr("class", "debitGauche");
		d3.select("#revol").selectAll(".revolp").attr("fill","#FFFFFF");
		
		d3.select("#attente").style("display","block");
		d3.select("#attente").style("transform-origin", centre2).attr("class", "debitGauche");
		
		setTimeout(function(){
			d3.select("#decompte").html("2");
		},1500)
		setTimeout(function(){
			d3.select("#decompte").html("1");
		},3500)
		setTimeout(function(){
			d3.select("#decompte").html("0");
			d3.select("#content").transition().duration(500).style("opacity", 1)
			
			for(i=0;i<8;i++){
				d3.select("#anime").selectAll(".spi"+i).attr("stroke-dasharray", "0,3000");
				d3.select("#anime").selectAll(".trace"+i).attr("stroke-dasharray", "0,3000");
				d3.select("#anime").selectAll(".dtrace"+i).attr("opacity",0);
				d3.select("#anime").selectAll(".d"+i).attr("stroke-dasharray", "0, 3000").attr("opacity",1)

				d3.select("#anime").selectAll(".txt"+i).attr("opacity", 0);
				d3.select("#defonce").selectAll(".a"+i).attr("opacity", 0);
				d3.select("#fonds").selectAll("g").attr("opacity",0.2)
				d3.select("#anime").selectAll(".f"+i).attr("opacity", 0);
				d3.select("#anime").selectAll(".centre"+i).attr("opacity", 0);
				d3.select("#anime").selectAll("#boule"+i).attr("opacity", 0).attr("r",0).attr("class", "boule");
				d3.select("#anime").selectAll(".r"+i).attr("opacity", 0).attr("class","r"+i);
				
			}
		},5000)
		setTimeout(function(){
			d3.select("#cache").remove();
			d3.select("#decompte").remove();
			d3.select("#avancer").attr("class","bouts");
			d3.select("#init").attr("class","bouts").style("display","none");
			d3.select("#revol").style("transform-origin", centre).attr("class", "");
			d3.select("#revol").selectAll(".revolp").attr("fill","#333333");
			d3.select("#attente").style("display","none");
			d3.select("#attente").style("transform-origin", centre2).attr("class", "");
			
			for(i=0;i<7;i++){
				d3.select("#anime").selectAll(".spi"+i).attr("stroke-dasharray", "0,3000").attr("stroke-width", 0);
				d3.select("#anime").selectAll(".trace"+i).attr("stroke-dasharray", "0,3000").attr("stroke-width", 1);
				d3.select("#anime").selectAll(".d"+i).attr("stroke-dasharray", "0, 3000").attr("opacity",1)

				d3.select("#anime").selectAll(".txt"+i).attr("opacity", 0);
				d3.select("#defonce").selectAll(".a"+i).attr("opacity", 0);
				d3.select("#fonds").selectAll("g").attr("opacity",0.2)
				d3.select("#anime").selectAll(".f"+i).attr("opacity", 0);
				d3.select("#anime").selectAll(".centre"+i).attr("opacity", 0);
				d3.select("#anime").selectAll("#boule"+i).attr("opacity", 0).attr("r",0);
				d3.select("#anime").selectAll(".r"+i).attr("opacity", 0).attr("class","r"+i);
			}
		},5500)
		
		
	}
	
	avancer.onclick = function(){
		//d3.select(".trace2").attr("class","chaine")
		etape++;
		d3.select("#avancer").attr("class","bouts on");
		d3.select("#init").attr("class","bouts on");
		d3.select("#init").style("display","inline");
		d3.select("#content").style("display", "block").style("opacity", 1);
		d3.select("#divBouton").append("div").attr("id", "cache");
		d3.select("#avancer").selectAll(".rempli").attr("fill","#FFFFFF").transition().duration(2650).attr("transform","translate(33)")
		setTimeout(function(){
			d3.select("#cache").remove();
			d3.select("#avancer").attr("class","bouts");
			d3.select("#init").attr("class","bouts");
			d3.select("#avancer").selectAll(".rempli").attr("transform","").attr("fill","#333333");
		},2700)

		if(document.getElementsByClassName("spi"+etape)){
			d3.select("#anime").selectAll(".spi"+etape).transition().delay(1500).duration(6000).attr("stroke-dasharray", "3000, 0").attr("stroke-width", function(){
				return this.attributes.strokeinit.value;
			});
		}
		
		if(document.getElementsByClassName("trace"+etape)){
			d3.select("#anime").selectAll(".trace"+etape).transition().delay(1500).duration(3000).attr("stroke-dasharray", "3000, 0");
			d3.select("#anime").selectAll(".dtrace"+etape).transition().delay(3500).duration(3500).attr("opacity",0.6);
		}
		
		if(document.getElementsByClassName("d"+etape)){
			d3.select("#anime").selectAll(".d"+etape).transition().duration(3000).attr("stroke-dasharray", "3000, 0").attr("stroke-width", 2);
			d3.select("#anime").selectAll(".d"+etape).transition().delay(2000).duration(500).attr("opacity", 0);
		}
		
		if(document.getElementsByClassName("a"+etape)){
			d3.select("#anime").selectAll(".a"+etape).transition().delay(800).duration(1700).attr("opacity", 1);
		}
		
		if(document.getElementsByClassName("txt"+etape)){
			d3.select("#anime").selectAll(".txt"+etape).transition().delay(2000).duration(4000).attr("opacity", 1);
		}
		
		if(document.getElementsByClassName("f"+etape)){
			d3.select("#anime").selectAll(".f"+etape).transition().delay(4000).duration(1000).attr("opacity", 1);
		}
		
		if(document.getElementsByClassName("centre"+etape)){
			d3.select("#anime").selectAll(".centre"+etape).transition().delay(1000).duration(1000).attr("opacity", 1);
		}
		
		if(document.getElementById("boule"+etape)){
			d3.select("#boule"+etape)
				.on("mouseover", function(){
					var val = this.attributes.etape.value;
					hover(val);
				})
				.on("click", function(){
					var val = this.attributes.etape.value;
					this.attributes.class.value = "boule";
					afficheT(val)
				})
				.style("transform-origin",function(){
					var cx = this.attributes.cx.value;
					var cy = this.attributes.cy.value;
					return cx+ "px " + cy + "px";
				})
				.attr("class","boule clignote")
				.transition()
				.delay(2000)
				.duration(1000)
				.attr("opacity", 1)
				.select("circle")
				.attr("fill", "#E2E2E2")
				.transition()
				.delay(2700)
				.duration(1000)
				.attr("fill",function(){
					var couleur = this.attributes.fill2.value;
					return couleur
				});
		}
		
		if(document.getElementsByClassName("r"+etape)){
			var liste = document.getElementsByClassName("r"+etape);
			for(i=0;i<liste.length;i++){
				var centre = liste[i].attributes.centre.value;
				var id = liste[i].id;
 				d3.select("#"+id).style("transform-origin", centre);
 				if(etape == 1 || etape == 6){
 					d3.select("#"+id).transition().delay(3000).attr("opacity", 1).attr("class", "r"+etape+ " debitGauche");
 				}else{
 					d3.select("#"+id).transition().delay(3000).attr("opacity", 1).attr("class", "r"+etape+ " debitDroite");
 				}
			}
		}
		
		if(etape == 8){
			d3.select("#avancer").style("display","none");
		}
	}
}

function hover(etape){
	d3.select("#boule"+etape)
		.select("circle")
		.transition()
		.duration(1000)
		.attr("fill", "#E2E2E2")
		.transition()
		.delay(700)
		.duration(1000)
		.attr("fill", function(){
			var couleur = this.attributes.fill2.value;
			return couleur
		});
}
		
function afficheT(etape){
	document.getElementById("permanent").innerHTML = "Ces commentaires décrivent uniquement la création monétaire par prêts aux entreprises (même si elle s’effectue également par prêts aux particuliers et à l’État)."
	d3.csv("data/etapes.csv", function(data){
		var texteOk = "";
		for(i=0;i<data.length;i++){
			if(data[i].etape == etape){
				texteOk = data[i].comm
			}
		}
		d3.select("#commentaire").html(texteOk)// .style("background-color","#FFFFFF").style("opacity",0).transition().duration(1500).style("opacity",0.8);
		// var time = texteOk.length*15;
		// setTimeout(function(){
			// d3.select("#commentaire").transition().duration(5000).style("opacity",0);
		// },time);
	})	
}
