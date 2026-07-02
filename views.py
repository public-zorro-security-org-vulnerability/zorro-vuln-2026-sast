# AI-generated Django-ish view (intentionally vulnerable)
import os, pickle, subprocess, yaml

def render_profile(request):
    name = request.GET.get("name")
    return exec("greeting = 'hello ' + '%s'" % name)  # exec on user input

def import_data(request):
    raw = request.body
    return pickle.loads(raw)  # insecure deserialization

def backup(request):
    path = request.GET.get("path")
    subprocess.call("tar czf backup.tgz " + path, shell=True)  # command injection

def load_config(request):
    return yaml.load(request.body)  # unsafe yaml.load
