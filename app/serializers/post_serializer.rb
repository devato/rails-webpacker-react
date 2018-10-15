class PostSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :description
end
