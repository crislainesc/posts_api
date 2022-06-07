import Post from "App/Models/Post";
import { schema, rules } from "@ioc:Adonis/Core/Validator";

export default class PostsController {
    public async index({response}) {
        const posts = await Post.all()

        return response.ok(posts.reverse())
    }

    public async store({request, response}) {
        const postSchema = schema.create({
            title: schema.string({trim: true}, [
                rules.maxLength(255)
            ]),
            content: schema.string({escape: true}, [
                rules.maxLength(1000)
            ])
        })

        const payload: any = await request.validate({schema: postSchema})

        const existsPost = await Post.findBy('title', payload.title)

        if(existsPost) {
            return response.conflict({message: 'Post already exists'})
        }

        const post: Post = await Post.create(payload)

        return response.created(post)
    }

    public async show({params, response}) {
        const {id}: {id: Number} = params

        const post: any = await Post.find(id)

        if(!post) {
            return response.notFound({message: 'Post not found'})
        }

        return response.ok(post)
    }

    public async update({request, params, response}) {
        const postSchema = schema.create({
            title: schema.string({trim: true}, [
                rules.maxLength(255)
            ]),
            content: schema.string({escape: true}, [
                rules.maxLength(1000)
            ])
        })

        const payload: any = await request.validate({schema: postSchema})

        const {id}: {id: Number} = params

        const post: any = await Post.find(id)

        if(!post) {
            return response.notFound({message: 'Post not found'})
        }

        post.title = payload.title
        post.content = payload.content

        await post.save()

        return response.ok(post)
    }

    public async destroy({params, response}) {
        const {id}: {id: Number} = params

        const post: any = await Post.find(id)

        if(!post) {
            return response.notFound({message: 'Post not found'})
        }

        await post.delete()

        return response.status(204)
    }
}
