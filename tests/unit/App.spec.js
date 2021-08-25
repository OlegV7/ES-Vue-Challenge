import App from '../../src/App.vue'
import { mount } from '@vue/test-utils'
import data from '../../public/data.json'

describe('App', () => {
    it('If all of the posts are not shown, show the button', () => {
        const wrapper = mount(App)

        expect(wrapper.find('button').exists()).toBe(true)
    })

    it('If all the posts are shown, do not show the button', async ()  => {
        const wrapper = mount(App)

        await wrapper.setData({ initalNumberOfPosts: 20 })

        expect(wrapper.find('button').exists()).toBe(false)
    })

    it('When a post is not clicked, the model does not appear', () => {
        const wrapper = mount(App)

        expect(wrapper.find('[data-testid="modal"]').exists()).toBe(false)
        expect(wrapper.html()).toContain('<div class="" data-testid="modal-bg"></div>')
    })

    it('When a post is clicked, a modal opens with its information', async () => {
        const wrapper = mount(App)

        const firstEl = data[0]

        await wrapper.setData({
            selectedPost: firstEl,
            showModalBg: true
        }) 
        
        expect(wrapper.find('[data-testid="modal"]').exists()).toBe(true)
        expect(wrapper.html()).toContain('<div class="modal-background" data-testid="modal-bg"></div>')
    })

    it('When the modal is opened, a click on the background closes it', async () => {
        const wrapper = mount(App)

        const firstEl = data[0]

        await wrapper.setData({
            selectedPost: firstEl,
            showModalBg: true
        }) 

        const modalBg = wrapper.find('[data-testid="modal-bg"]')

        await modalBg.trigger('click')
        
        expect(wrapper.find('[data-testid="modal"]').exists()).toBe(false)
        expect(wrapper.html()).toContain('<div class="" data-testid="modal-bg"></div>')
    })
})