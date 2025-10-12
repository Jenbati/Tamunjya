import os

# Folder path
folder = r"C:\Users\jain_\Desktop\Tamunjya html\images\day1"

# Starting number
start_num = 94

# Get all files in the folder
files = sorted(os.listdir(folder))

# Filter only images (you can add more extensions if needed)
image_files = [f for f in files if f.lower().endswith(('.jpg', '.jpeg', '.png'))]

for i, filename in enumerate(image_files, start=start_num):
    old_path = os.path.join(folder, filename)
    ext = os.path.splitext(filename)[1]  # Keep the original file extension
    new_filename = f"gallery{i}{ext}"
    new_path = os.path.join(folder, new_filename)

    os.rename(old_path, new_path)
    print(f"✅ Renamed: {filename} → {new_filename}")

print("\n🎉 All images renamed successfully!")
