<script setup>
import ProductItem from "../components/ProductItem.vue"
</script>
<template>
    <div class="yang-card-div">
        <div class="yang-first"></div>
        <div class="yang-content">
            <ProductItem>
                <template #productTitle>
                    <h3>電療機器</h3>
                </template>
                <template #productInfo>
                    <p>復健治療中頻電療器(中頻機)</p>
                    <p>低週波電療器</p>
                    <p>攜帶式小型低週波電療器</p>
                </template>
            </ProductItem>

            <ProductItem>
                <template #productTitle>
                    <h3>醫療耗材批發</h3>
                </template>
                <template #productInfo>
                    <p>插式/釦式 電療貼片</p>
                    <p>瘦身減肥電療器專用各式電擊貼片</p>
                    <p>單極/雙極 迴路電擊板</p>
                    <p>插式轉釦式用轉接釦</p>
                    <p>各式電療儀器插式/釦式導線</p>
                </template>
            </ProductItem>

        </div>
        <div class="yang-last"></div>
    </div>
</template>

<style scoped>
.yang-content{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
}
h3{
    color: #FF7E3E;
    font-size: 20px;
    font-weight: bold;
}
p{
    font-size: 16px;
}
</style>