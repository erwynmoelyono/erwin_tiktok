<template>
    <div class="flex items-center hover:bg-gray-100 rounded-md w-full py-1.5 px-2">
        <img class="rounded-full 1300:mx-0 mx-auto" width="35" src="https://picsum.photos/id/8/300/320">
        <div class="1300:pl-2.5 1300:block hidden">
            <div class="flex items-center">
                <div class="font-bold text-[14px]">

                    {{ user.name }}
                </div>
                <div class="ml-1 rounded-full bg-[#58D5EC] h-[14px] relative">
                    <Icon class="relative -top-[7px]" name="teenyicons:tick-small-solid" color="#FFFFFF" size="15" />
                </div>
            </div>

            <div class="font-light text-[12px] text-gray-600">
                {{ user.name }}
            </div>
        </div>
    </div>
</template>

<script setup>

defineProps(['user'])
</script>