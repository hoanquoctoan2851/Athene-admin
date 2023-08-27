import {computed} from "vue";

export const useDevice = () => {
    const isMobile = computed(() => {
        return window.innerWidth < 767
    })

    const isTablet = computed(() => {
        return window.innerWidth < 1025 && window.innerWidth > 767
    })
    const isDesktop = computed(() => {
        return window.innerWidth > 1024
    })
    return {
        isMobile,
        isTablet,
        isDesktop,

    }
}