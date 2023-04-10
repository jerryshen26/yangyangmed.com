<script setup>
import InfoList from '../components/InfoList.vue'
</script>

<template>
    <div class="yang-card-div">
        <div class="yang-first"></div>
        <div class="yang-content">
            <div class="yang-logo">
                <img src="../assets/img/yang_logo.svg" alt="">
                <h1><span class="yang-orange">陽陽</span><span class="yang-green">儀器</span>有限公司</h1>
            </div>
            <div class="yang-info">
                <p class="yang-name">沈 先生</p>
                <hr class="yang-hr">
                <InfoList>
                    <template #info-icon>
                        <img src="../assets/img/phone.svg" alt="">
                    </template>
                    <template #info-description>
                        電話：
                        <a href="tel:02-24571866">
                            02-24571866
                        </a>
                    </template>
                </InfoList>
                <InfoList>
                    <template #info-icon>
                        <img src="../assets/img/fax.svg" alt="">                    </template>
                    <template #info-description>
                        傳真：
                        <a href="fax:02-24571867">
                            02-24571867
                        </a>
                    </template>
                </InfoList>

                <InfoList>
                    <template #info-icon>
                        <img src="../assets/img/mobile.svg" alt="">
                    </template>
                    <template #info-description>
                        手機：
                        <a href="tel:0939-268778">
                            0939-268778
                        </a>
                        
                    </template>
                </InfoList>

                <InfoList>
                    <template #info-icon>
                        <img src="../assets/img/Location.svg" alt="">
                    </template>
                    <template #info-description>
                        位置：基隆市
                    </template>
                </InfoList>

            </div>
        </div>
        <div class="yang-last"></div>

    </div>
</template>



<style scoped>

.yang-logo{
    vertical-align: middle;

}
.yang-logo img{
    width: 72px;
    height: 72px;
    padding: 8px;
    display: inline-block;
    vertical-align: middle;
}

.yang-logo h1{
    color: black;
    display: inline-block;
    vertical-align: middle;
    font-size: 32px;
}

.yang-logo h1>.yang-orange{
    color: #FF7E3E;
}
.yang-logo h1>.yang-green{
    color: #22B573;
}

.yang-info{
    color: black;
}

.yang-name{
    font-size: 24px;
}
.yang-hr{
    margin: 10px 0;
}



</style>