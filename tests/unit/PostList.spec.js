import PostList from '../../src/components/PostList'
import { mount } from '@vue/test-utils'
import data from '../../public/data.json'

describe('PostListItem', () => {
    it('When a post is clicked, it emits its ID', async () => {
        const wrapper = mount(PostList, {
            props: {
                posts: data
            }
        })

        const firstPost = wrapper.find('[data-post-testid="0"]')
        await firstPost.trigger('click')

        const postClickCall = wrapper.emitted('id-to-main')
        expect(postClickCall).toHaveLength(1)

        expect(wrapper.emitted('id-to-main')[0][0]).toEqual(0)
    })
})