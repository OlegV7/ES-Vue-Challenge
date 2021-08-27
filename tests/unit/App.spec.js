import App from '../../src/App.vue'
import { mount, flushPromises } from '@vue/test-utils'
import getData from '../../src/services/DataService'
import data from '../../public/data.json'

jest.mock('../../src/services/DataService')

describe('App', () => {
    let wrapper = null;

    beforeEach(async () => {
        getData.mockResolvedValueOnce(data)

        wrapper = mount(App)

        await flushPromises()

        expect(getData).toHaveBeenCalledTimes(1)

        jest.clearAllMocks()
    })

    // it('Renders posts if request is successfull', () => {
    test('If the request is successfull, show the posts', () => {
        const postListItems = wrapper.findAllComponents('[data-testid="post-list-item"]')

        expect(postListItems).toHaveLength(4)
        expect(wrapper.html()).toContain('<h3 class="card__profile-name">John Smith</h3>')
        expect(wrapper.html()).toContain('<div class="card" data-testid="post-list-item" data-post-testid="2">')
    })

    // it('When the button is clicked more posts get rendered', async () => {
    test('If the button is clicked, show more posts', async () => {
        const btn = wrapper.find('button')
        await btn.trigger('click')

        const postListItems = wrapper.findAllComponents('[data-testid="post-list-item"]')

        expect(postListItems).toHaveLength(8)
        expect(wrapper.html()).toContain('<h3 class="card__profile-name">John Smith</h3>')
        expect(wrapper.html()).toContain('<div class="card" data-testid="post-list-item" data-post-testid="5">')
    })

    // it('When all of the posts are loaded, the button is not shown.', async () => {
    test('If all the posts are loaded, the button is not shown', async () => {
        const btn = wrapper.find('button')
        await btn.trigger('click')
        await btn.trigger('click')
        await btn.trigger('click')
        await btn.trigger('click')

        const postListItems = wrapper.findAllComponents('[data-testid="post-list-item"]')

        expect(postListItems).toHaveLength(20)
        expect(wrapper.find('button').exists()).toBe(false)
    })

    // it('If all of the posts are not shown, show the button', async () => {
    test('If all of the posts are not loaded, show the button', async () => {
        const btn = wrapper.find('button')
        await btn.trigger('click')
        expect(wrapper.find('button').exists()).toBe(true)

        await btn.trigger('click')
        expect(wrapper.find('button').exists()).toBe(true)
        
        await btn.trigger('click')
        expect(wrapper.find('button').exists()).toBe(true)

        const postListItems = wrapper.findAllComponents('[data-testid="post-list-item"]')

        expect(postListItems).toHaveLength(16)
    })

    it('By default, the modal does not appear', () => {
        expect(wrapper.find('[data-testid="modal"]').exists()).toBe(false)
        expect(wrapper.html()).toContain('<div class="" data-testid="modal-bg"></div>')
    })

    test('If a post is clicked, a modal opens with its details', async () => {
        const firstPost = wrapper.find('[data-post-testid="0"]')
        expect(firstPost.exists()).toBe(true)
        await firstPost.trigger('click')

        expect(wrapper.find('[data-testid="modal"]').exists()).toBe(true)
        expect(wrapper.html()).toContain('<div class="modal-background" data-testid="modal-bg"></div>')
    })

    test('If the modal is opened, a click on the background closes it', async () => {
        const firstPost = wrapper.find('[data-post-testid="0"]')
        expect(firstPost.exists()).toBe(true)
        await firstPost.trigger('click')

        expect(wrapper.find('[data-testid="modal"]').exists()).toBe(true)
        expect(wrapper.html()).toContain('<div class="modal-background" data-testid="modal-bg"></div>')

        const modalBg = wrapper.find('[data-testid="modal-bg"]')
        await modalBg.trigger('click')
        
        expect(wrapper.find('[data-testid="modal"]').exists()).toBe(false)
        expect(wrapper.html()).toContain('<div class="" data-testid="modal-bg"></div>')
    })
})