<script setup lang="ts">
import { ref } from 'vue'

type Faq = {
    id: string
    title: string
    content: string
}

const faqs: Faq[] = [
    {
        id: 'viajando-con-ninos',
        title: 'Viajando con niños',
        content:
            'Donec facilisis nibh sed erat condimentum, id eleifend justo rutrum. Praesent vehicula lectus vitae metus scelerisque, id efficitur erat tincidunt. Suspendisse varius tortor nisi, vel mattis velit auctor ac. Duis sodales velit id dignissim auctor. Nunc lorem augue, sollicitudin vitae quam at, suscipit mattis lectus. Vestibulum vel consequat justo. Donec congue sagittis diam vitae aliquam. Maecenas egestas turpis nibh, sed pulvinar nunc vestibulum sed. Donec et odio quis magna aliquam lacinia. Nulla sapien diam, sagittis sit amet accumsan eu, convallis sed augue. Phasellus vitae sem eget nisl pretium malesuada. Curabitur et tincidunt nunc. Praesent porta, massa sit amet faucibus eleifend, justo mauris pulvinar justo, eget faucibus erat augue nec ex. Nullam suscipit libero elit, eu auctor elit viverra nec. Etiam tempor euismod blandit.'
    },
    {
        id: 'viajando-solo',
        title: 'Viajando solo',
        content:
            'Cras non ligula aliquet, mattis velit nec, molestie nunc. Donec vulputate nisi eget leo suscipit, vitae gravida quam consectetur. Ut luctus imperdiet erat, vel volutpat nisl tristique suscipit. Aliquam ut condimentum justo, eu tristique enim. Donec accumsan in justo sed convallis. Vivamus luctus purus id erat euismod, at lobortis nibh commodo. Quisque ultrices erat eu nunc tristique pharetra. Fusce rhoncus, turpis vitae scelerisque sodales, nibh velit dignissim magna, sit amet luctus dui purus nec purus. Nullam semper rutrum lobortis. Vivamus ac urna nec quam facilisis ullamcorper a id quam.'
    },
    {
        id: 'habitaciones',
        title: 'Habitaciones',
        content:
            'Duis a varius erat. Aliquam gravida ac magna vitae cursus. Pellentesque et neque nulla. Cras nec leo convallis nisl pharetra lobortis. Aliquam interdum consequat dictum. Quisque iaculis lorem et fermentum efficitur. Ut et auctor est. Nam nec erat semper, elementum velit vitae, euismod nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec sit amet tellus odio. Cras metus lacus, molestie id nisl vitae, blandit lobortis nisi. Proin sed ullamcorper est. Proin viverra augue massa, at consectetur ex euismod porttitor. Morbi at semper velit.'
    },
    {
        id: 'visado',
        title: 'Visado',
        content:
            'Nam accumsan ipsum ac aliquet cursus. In eget lobortis enim. In condimentum, odio sed mattis lacinia, erat tellus lacinia ipsum, eu lobortis lectus ipsum ac dolor. Aliquam tempus condimentum velit, eu auctor mi elementum id. Fusce dolor justo, feugiat et malesuada vel, pulvinar ut magna. Donec sed tellus quis turpis aliquet interdum. In hac habitasse platea dictumst. In nec tempor leo. Morbi a convallis nisi. Quisque porta ullamcorper mi vitae vestibulum. Aenean eget condimentum tellus. Mauris sit amet aliquet orci. Etiam quis sem laoreet tellus iaculis vulputate. Integer vitae sodales leo.'
    },
    {
        id: 'seguro',
        title: 'Seguro',
        content:
            'Nullam aliquam nec ipsum id pretium. Maecenas elit ipsum, consectetur eu cursus id, convallis non orci. Vivamus lectus massa, congue ut ligula at, convallis dapibus metus. Aenean ut sapien at magna finibus ornare. In id metus neque. Nam ultrices elit aliquam nunc eleifend tempor. Nunc a suscipit leo, ut maximus tortor. Aenean fermentum dignissim nunc, vitae congue metus vulputate hendrerit. Aliquam viverra sed lacus ac posuere. Curabitur at tincidunt nulla, non aliquet est. In hac habitasse platea dictumst. Phasellus ac arcu efficitur, laoreet leo ac, efficitur sem. Praesent sed tellus quam.'
    },
    {
        id: 'llegada',
        title: 'Llegada',
        content:
            'Proin vel lacus sit amet purus vehicula dapibus. Integer elementum ut metus nec bibendum. Duis venenatis molestie ultrices. Suspendisse ultricies massa ac vestibulum volutpat. In hac habitasse platea dictumst. Proin aliquam arcu fringilla suscipit viverra. Aliquam tempus commodo dui tempor sodales. Mauris sodales ante et magna iaculis, in laoreet diam aliquet. Mauris aliquet imperdiet mauris eu commodo. Donec vestibulum metus vel ultrices hendrerit. Nunc eu pharetra eros, quis pretium mi. Nulla facilisi. Phasellus molestie a elit nec pretium. Etiam gravida ex elementum, rhoncus erat eu, pulvinar dolor.'
    },
    {
        id: 'comida',
        title: 'Comida',
        content:
            'Nam congue augue ut dictum finibus. Mauris nec fermentum est. Pellentesque auctor dolor ac velit consequat iaculis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi quis pulvinar tortor, non finibus nunc. Nam ac est vitae nisi consequat congue. Aenean et dictum lectus. Fusce posuere, justo vitae lacinia finibus, sapien lorem consequat metus, eu placerat libero felis eget libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas eros augue, bibendum ac faucibus ac, faucibus vel lectus. Sed sagittis auctor molestie.'
    },
    {
        id: 'hoteles',
        title: 'Hoteles',
        content:
            'Nam rutrum tortor vitae mauris ornare, id tempus lectus suscipit. Aenean nec metus sed neque commodo faucibus. Donec tempor ex id eros semper, vel precio massa dapibus. Curabitur a urna faucibus, convallis dolor at, volutpat nulla. Nulla aliquet eu metus non faucibus. Mauris quis mi velit. Morbi sed ultrices tortor. Suspendisse consectetur nisl quis sodales euismod. Duis luctus molestie quam eget feugiat. Vestibulum auctor orci vitae elit commodo faucibus eu quis ex. Phasellus fringilla, neque ut fringilla rutrum, justo sem porta elit, quis pellentesque leo leo vitae eros. Aliquam vel ipsum viverra, sodales purus quis, ultrices urna. Fusce eget mauris eget arcu dictum mollis. Duis at rutrum tortor. Sed arcu est, pulvinar quis dictum vitae, congue quis dui.'
    },
    {
        id: 'actividades',
        title: 'Actividades',
        content:
            'Morbi sagittis diam vitae lectus euismod sodales. Donec ac odio tincidunt, fermentum sem vitae, rhoncus leo. Suspendisse non arcu non tortor sodales dignissim sed ac urna. Donec lacinia sollicitudin arcu, in dapibus neque pretium nec. Pellentesque nec sem et lorem consectetur dignissim. Etiam maximus, tellus at malesuada aliquam, nunc libero scelerisque augue, a porttitor lectus quam eu lorem. Duis sit amet diam pellentesque, feugiat ligula eget, maximus diam. Etiam in quam ac augue feugiat placerat vel a urna. Praesent bibendum, lacus quis iaculis pellentesque, lorem nibh vulputate sem, id bibendum tortor nisi at erat. Duis posuere leo in purus congue, ut commodo est ullamcorper.'
    },
    {
        id: 'transporte',
        title: 'Transporte',
        content:
            'Nunc quam est, ultricies ac risus vitae, suscipit venenatis turpis. Mauris lacinia luctus lacus vitae fermentum. Suspendisse sit amet mollis nisl. Sed in molestie mauris. Quisque faucibus sed ante eu ultricies. Donec consequat auctor sem id imperdiet. Etiam consequat elementum orci, in lobortis nisi. Aliquam lectus dui, volutpat eu elit ac, consectetur condimentum ex. Fusce ut leo at lorem rutrum mollis. Curabitur venenatis placerat dolor id vulputate. Nunc ultricies magna ac leo fringilla, vitae sodales augue finibus. In consequat dui sit amet blandit pellentesque.'
    }
]

// ✅ ahora puede haber múltiples abiertos o todos cerrados
const openIds = ref<string[]>([])

const isOpen = (id: string) => openIds.value.includes(id)

const toggle = (id: string) => {
    if (isOpen(id)) {
        openIds.value = openIds.value.filter(openId => openId !== id)
    } else {
        openIds.value = [...openIds.value, id]
    }
}
</script>

<template>
    <section class="w-full  py-16 px-4">
        <div
            class="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[minmax(0,0.9fr),minmax(0,1.3fr)] items-start font-poppins text-slate-800">
            <!-- Left: heading -->
            <div class="space-y-4">
                <p class="text-xs uppercase tracking-[0.2em] text-slate-500">
                    FAQ
                </p>
                <h2 class="text-3xl sm:text-4xl font-semibold leading-tight">
                    Frecuentemete
                    <span class="block text-emerald-600">Preguntado</span>
                </h2>
                <p class="text-sm sm:text-base text-slate-500 max-w-md">
                    Resolvemos las dudas más habituales sobre viajes, hoteles, visados, seguros
                    y mucho más, para que solo te preocupes de disfrutar.
                </p>
            </div>

            <!-- Right: accordion -->
            <div
                class="bg-white border border-slate-100 rounded-3xl shadow-lg shadow-slate-200/60 divide-y divide-slate-100">
                <div v-for="faq in faqs" :key="faq.id" class="group">
                    <!-- Title -->
                    <button type="button"
                        class="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4 sm:py-5 text-left"
                        @click="toggle(faq.id)">
                        <span class="text-lg sm:text-base font-bold text-slate-900">
                            {{ faq.title }}
                        </span>

                        <span
                            class="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200  text-slate-600 group-hover:border-emerald-400 group-hover:text-emerald-600 transition">
                            <!-- Plus / minus icon -->
                            <svg v-if="!isOpen(faq.id)" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4"
                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path d="M12 5v14" />
                                <path d="M5 12h14" />
                            </svg>
                            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round">
                                <path d="M5 12h14" />
                            </svg>
                        </span>
                    </button>

                    <!-- Content -->
                    <transition enter-active-class="transition-all duration-200 ease-out"
                        leave-active-class="transition-all duration-150 ease-in" enter-from-class="max-h-0 opacity-0"
                        enter-to-class="max-h-[500px] opacity-100" leave-from-class="max-h-[500px] opacity-100"
                        leave-to-class="max-h-0 opacity-0">
                        <div v-if="isOpen(faq.id)"
                            class="px-5 sm:px-6 pb-4 sm:pb-5 text-xs sm:text-[13px] text-slate-600">
                            <p class="leading-relaxed">
                                {{ faq.content }}
                            </p>
                        </div>
                    </transition>
                </div>
            </div>
        </div>
    </section>
</template>
