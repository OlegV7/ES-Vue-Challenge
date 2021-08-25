import App from '../../src/App.vue'
import data from '../../public/data.json'
import { mount } from '@vue/test-utils'

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

    it('When the modal is opened, a click on the background closes it', async () => {
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

        const modalBg = wrapper.find('[data-testid="modal-bg"]')

        await modalBg.trigger('click')

        expect(wrapper.html()).toContain('<div class="" data-testid="modal-bg"></div>')
    })

    it('When the page first loads, four posts get added', async () => {
        const wrapper = mount(App)

        await wrapper.setData({
            posts: [...data]
        })

        const postListItems = wrapper.findAllComponents('[data-testid="post-list-item"]')

        expect(postListItems).toHaveLength(4)
    })

    it('When the button is clicked, four more posts get loaded', async () => {
        const wrapper = mount(App)

        await wrapper.setData({
            posts: [...data]
        })

        const btn = wrapper.find('button')
        await btn.trigger('click')

        const postListItems = wrapper.findAllComponents('[data-testid="post-list-item"]')

        expect(postListItems).toHaveLength(8)
    })

})