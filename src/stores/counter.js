import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }
  const about = null
  const works = null
  const contacts = null

  function scrollToAbout() {
    const top = this.about.$el.offsetTop
    window.scrollTo({left: 0, top: top - 100, behavior: 'smooth'})
  }

  function scrollToWorks() {
    const top = this.works.$el.offsetTop
    window.scrollTo({left: 0, top: top - 100, behavior: 'smooth'})
  }

  function scrollToContacts() {
    const top = this.contacts.$el.offsetTop
    window.scrollTo({left: 0, top: top - 100, behavior: 'smooth'})
  }

  return { count, doubleCount, about, works, contacts, scrollToAbout, scrollToWorks, scrollToContacts }
})
