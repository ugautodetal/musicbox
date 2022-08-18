<script>

import SingleLetter from './lib/SingleLetter.svelte'
import WorldMapImg from './assets/world_map.svg'

</script>

<img class="map" src="./world_map.svg" alt="background map"/>

<div class="logo-container">
{#each "UGAUTODETAL" as letter, index}
  <SingleLetter letter={letter} index={index}/>
{/each}
</div>

<div class="info-container">
  <p class="about">В настоящий момент ассортимент компании насчитывает более пяти тысяч наименований автокомпонентов производства как российских, так и зарубежных заводов. Объединив в общей сложности продукцию нескольких сотен производителей.  Компании удалось сплотить коллектив высококвалифицированных специалистов, который делает все возможное для того, чтобы любой клиент смог получить доступ к удобному сервису. Каждому клиенту предоставляется персональный менеджер, который отслеживает весь процесс работы от размещения заказа до его получения. </p>
  
  <!--<div class="delivery"><b>Компания осуществляет оперативную доставку во многие регионы.</b></div>-->
<div class="city-list">
<span class="city">Краснодарский край</span>  
<span class="city">Республика Адыгея</span>  
<span class="city">Ростовская область</span>  
<span class="city">Астраханская область</span>
<span class="city">Ставропольский край</span>
<span class="city">Республика Крым</span>  
<span class="city">Республика Карачаево-Черкессия</span>
<span class="city">Республика Дагестан, Республика Калмыкия</span>  
<span class="city">Республика Северная Осетия</span>  
<span class="city">Чеченская Республика</span>  
</div>
</div>

<style>

.map {
  position: absolute;
  top: -50px;
  left: 320px;
  width: 800px;
  z-index: -10;
}

.logo-container {
  margin-top: 150px;
  display: flex;
  justify-content: center;
  width: 800px;
  user-select: none;
  font-family: "JetBrains Mono";
  font-size: 80px;
  margin-bottom: 120px;
}

.info-container {
   margin: 0 auto;
   font-family: 'Open Sans';
   font-size: 14px;
   width: 800px;
   text-align: justify;
}

.about {
   margin: auto;
   padding-bottom: 40px;
   color: #444;
   text-indent: 40px;
}


.city-list {
   display: flex;
   flex-wrap: wrap;
}

.city {
   background: whitesmoke;
   flex-grow: 1;
   margin: 2px;
   padding: 8px;
   border-radius: 10px;
}


</style>