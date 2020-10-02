  function manejarCadena() {
      var cadena = document.formulario_cadena_caracteres.area_cadena.value;
      
      var palabra = "";
      
      var vocales = 0;
      var consonantes = 0;
      var numeroLetra = 0;
      var cadenaLoca = "";
      
      for (i=0; i<cadena.length; i++) {
          if (cadena[i]=='a' || cadena[i]=='e' ||
             cadena[i]=='i' || cadena[i]=='o' ||
             cadena[i]=='u' || cadena[i]=='A' ||
             cadena[i]=='E' || cadena[i]=='I' ||
             cadena[i]=='O' || cadena[i]=='U')
              vocales++;
      }
      
      document.formulario_cadena_caracteres.caja_vocales.value = vocales;
      
      for (i=0; i<cadena.length; i++) {
          if (cadena[i]!='a' && cadena[i]!='e' &&
             cadena[i]!='i' && cadena[i]!='o' &&
             cadena[i]!='u' && cadena[i]!='A' &&
             cadena[i]!='E' && cadena[i]!='I' &&
             cadena[i]!='O' && cadena[i]!='U' && 
             cadena[i]!=' ')
              consonantes++;
      }
      
      document.formulario_cadena_caracteres.caja_consonantes.value = consonantes;
      
      var letras = cadena.split(" ");
      letra = document.formulario_cadena_caracteres.caja_buscar_letra.value;
      
      for(var i=0; i<letras.length; i++) {
          if (letras[i]==tra) {
              numeroLetra++;
          }
      } 
      document.formulario_cadena_caracteres.caja_numero_letras.value = numeroLetra;
      
      for(i=0; i<cadena.length; i++) {
          if ((i%2)==0) {
              cadenaLoca = cadenaLoca + cadena[i].toUpperCase();
          } else if ((i%2)==1) {
              cadenaLoca = cadenaLoca + cadena[i].toLowerCase();
          }
      }
      
      document.formulario_cadena_caracteres.area_cadena_loca.value = cadenaLoca;
  }