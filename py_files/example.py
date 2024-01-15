from transformers import pipeline
classifier=pipeline("sentiment-analysis")
res=classifier("I have been waing for a Huggingface course my whole life.")
print(res)