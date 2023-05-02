<template>
<div class="yang-headerBlock">
    <div class="yang-header-logo">
        <img  src="../assets/img/yang_logo.svg" alt="">
        <h3>
            <span class="yang-orange">陽陽</span>
            <span class="yang-green">儀器</span>
        </h3>
    </div>
    <div class="yang-links">
        <ul>
            <li>
               <a href="tel:02-24571866">
                <img src="../assets/img/mobile_black.svg" alt="">                
               </a>
            </li>
        </ul>
    </div>
</div>
</template>
<style scoped>
.yang-headerBlock{
    display: flex;
    align-items: center;
    width: 70%;
    margin: auto;
}

.yang-header-logo h3{
    margin-left: 10px;
    font-size: 22px;
    display: inline-block;
    vertical-align: middle;
}

.yang-links{
    vertical-align: middle;
}

.yang-header-logo img{
    width: 48px;
    height: 48px;
    display: inline-block; 
    vertical-align: middle;   
}
.yang-header-logo h3>.yang-orange{
    color: #FF7E3E;
}
.yang-header-logo h3>.yang-green{
    color: #22B573;
}

    .yang-header-logo{
        width: 100%;
        margin: auto;
    }
    .yang-header-logo img{

    }

    .yang-links ul li img{
        width: 24px;
        height: 24px;
        vertical-align: middle;
    }
</style>