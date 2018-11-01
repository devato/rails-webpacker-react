class PostsController < ApplicationController
  respond_to :json
  before_action :set_post, only: [:show, :edit, :update, :destroy]

  def index
    @posts = current_user.posts
    respond_with(@posts)
  end

  def show
    respond_with(@post, status: :ok)
  end

  def new
    @post = Post.new
  end

  def edit
  end

  def create
    @post = Post.new(post_params)
    current_user.posts << @post
    if @post.save
      respond_with(@post, status: :created, location: '/posts')
    else
      render json: { errors: @post.errors.full_messages }, status: :unprocessible_entity
    end
  end

  def update
    if @post.update(post_params)
      respond_with(@post, status: :ok, location: '/posts')
    else
      render json: { errors: @post.errors.full_messages }, status: :unprocessible_entity
    end
  end

  def destroy
    @post.destroy
    respond_with(@post, status: :created, location: '/posts')
  rescue => e
    render json: { errors: { error: e.message } }, status: :unprocessible_entity
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_post
      @post = Post.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def post_params
      params.permit(:title, :description)
    end
end
