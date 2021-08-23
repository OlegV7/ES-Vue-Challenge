import { mount } from '@vue/test-utils'
import App from '../../src/App.vue'

describe('App', () => {
    it('When a post is not clicked, the model does not appear', () => {
        const wrapper = mount(App)

        expect(wrapper.find('[data-testid="modal"]').exists()).toBe(false)
        expect(wrapper.html()).toContain('<div class="" data-testid="modal-bg"></div>')
    })

    it('When a post is clicked, a modal opens with its information', async () => {
        const wrapper = mount(App)

        const data = {
            "image": "https://placekitten.com/600/400",
            "caption": "Duis in facilisis lectus. Nulla molestie erat erat, quis tempor enim sodales vitae. Sed tempus, libero fringilla rhoncus ullamcorper, justo elit dignissim ex, nec elementum quam sem in urna.",
            "type": "image",
            "source_type": "facebook",
            "source_link": "https://www.facebook.com/EmbedSocial/",
            "date": "2018-03-12 03:00:00",
            "likes": "123",
            "name": "John Smith",
            "profile_image": "https://placekitten.com/g/100/100"
        }

        await wrapper.setData({
            selectedPost: data,
            showModalBg: true
        }) 
        
        expect(wrapper.find('[data-testid="modal"]').exists()).toBe(true)
        expect(wrapper.html()).toContain('<div class="modal-background" data-testid="modal-bg"></div>')
    })
})