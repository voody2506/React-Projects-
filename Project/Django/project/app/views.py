from django.shortcuts import render
from app.models import Post
from app.models import Cart
from django.core import serializers
from django.http import HttpResponse, QueryDict
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def posts_list(request):
    if request.method == 'GET':
        todos=Post.objects.values()
        return JsonResponse({'posts':list(todos)})
    elif request.method == 'POST':
        todo = request.POST.get("new_post",'')
        data = Post.objects.create(title = todo)
        data.save()
        
        return JsonResponse({'id': data.id})

    else:
        return HttpResponse('error')

@csrf_exempt
def posts_details(request,todo_id):
    todos = Post.objects.filter(pk=todo_id).values()
    return JsonResponse({'text':list(todos)})

@csrf_exempt
def posts_delUpd(request,post_id):
    if request.method == "GET":
        todo = Post.objects.filter(id=post_id)
        todo.delete()
        return HttpResponse("Deleted")
    elif request.method == "POST":
        data = Post.objects.get(id=post_id)
        data.title = request.POST["new_text"]
        data.save()
        return HttpResponse("Updated")

@csrf_exempt
def cart_list(request):
    if request.method == 'GET':
        todos=Cart.objects.values()
        return JsonResponse({'cart':list(todos)})
    elif request.method == 'POST':
        todo = request.POST.get("new_cart",'')
        data = Cart.objects.create(title = todo)
        data.save()
        
        return JsonResponse({'id': data.id})
    
    else:
        return HttpResponse('error')

@csrf_exempt
def cart_delUpd(request,post_id):
    if request.method == "GET":
        todo = Cart.objects.filter(id=post_id)
        todo.delete()
        return HttpResponse("Deleted")
    elif request.method == "POST":
        data = Cart.objects.get(id=post_id)
        data.title = request.POST["new_text"]
        data.save()
        return HttpResponse("Updated")

# Create your views here.
