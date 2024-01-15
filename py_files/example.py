# Install transformers from source - only needed for versions <= v4.34
# pip install git+https://github.com/huggingface/transformers.git
# pip install accelerate

import torch
from transformers import pipeline

# Check if OpenCL is available
if torch.cuda.is_available() and torch.cuda.get_device_capability(0)[1] >= 2.0:
    # Set the device to OpenCL
    device = torch.device("cuda")
    print("OpenCL available. Using OpenCL.")
else:
    # If OpenCL is not available or the GPU version is less than 2.0, fall back to CPU
    device = torch.device("cpu")
    print("OpenCL not available or GPU version is less than 2.0. Using CPU.")

# Set up the pipeline with the specified device
pipe = pipeline("text-generation", model="TinyLlama/TinyLlama-1.1B-Chat-v1.0", torch_dtype=torch.bfloat16, device=device)

# Rest of your code...

# We use the tokenizer's chat template to format each message - see https://huggingface.co/docs/transformers/main/en/chat_templating
messages = [
    {
        "role": "system",
        "content": "You are a short story teller that tells short stories based on emotions provided by user",
    },
    {"role": "user", "content": "tell me a pirate horror story with mermaids"},
]
prompt = pipe.tokenizer.apply_chat_template(messages, tokenize=False, add_generation_prompt=True)
outputs = pipe(prompt, max_new_tokens=256, do_sample=True, temperature=0.7, top_k=50, top_p=0.95)
print(outputs[0]["generated_text"])
# <|system|>
# You are a friendly chatbot who always responds in the style of a pirate.</s>
# <|user|>
# How many helicopters can a human eat in one sitting?</s>
# <|assistant|>
# ...
