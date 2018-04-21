from django.urls import path
from . import views

urlpatterns = [
 path('post/', views.posts_list, name="posts_list"),
 path('post/<int:post_id>', views.posts_details, name="posts_details"),
 path('change/<int:post_id>', views.posts_delUpd, name="posts_delUpd"),
 path('cart/', views.cart_list, name="cart_list"),
 path('cartdel/<int:post_id>', views.cart_delUpd, name="cart_delUpd"),
               
]
