import App from '../../src/App.vue'
import { mount } from '@vue/test-utils'

describe('App', () => {
    it('If all of the posts are not shown, show the button', () => {
        const wrapper = mount(App)

        expect(wrapper.find('button').isVisible()).toBe(true)
    })

    it('If all the posts are shown, do not show the button', async ()  => {
        const wrapper = mount(App)

        await wrapper.setData({ initalNumberOfPosts: 20 })

        expect(wrapper.find('button').exists()).toBe(false)
    })
})