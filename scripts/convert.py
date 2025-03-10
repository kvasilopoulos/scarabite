import os
import subprocess
from PIL import Image

input_svg = "resources/img/full/logo.svg"  # Change this to your SVG file path
output_folder = "resources/img/full"


os.makedirs(output_folder, exist_ok=True)

# Define output sizes
sizes = {
    "favicon": [(16, 16), (32, 32), (48, 48)],
    "web_header": [(250, 100), (400, 100)],
    "social_profile": [(400, 400)],
    "social_post": [(1080, 1080)],
    "twitter_banner": [(1500, 500)],
    "linkedin_banner": [(1584, 396)],
}

# Export to high-quality PDF first
pdf_path = os.path.join(output_folder, "temp_logo.pdf")
subprocess.run(
    ["inkscape", input_svg, "--export-filename", pdf_path, "--export-dpi=300"],
    check=True,
)

# Convert PDF to PNG with high resolution
for category, dims in sizes.items():
    for width, height in dims:
        png_path = os.path.join(output_folder, f"{category}_{width}x{height}.png")
        subprocess.run(
            [
                "inkscape",
                pdf_path,
                "--export-filename",
                png_path,
                "--export-width",
                str(width),
                "--export-height",
                str(height),
                "--export-dpi=300",
            ],
            check=True,
        )
        print(f"Saved: {png_path}")

# Convert to ICO (Favicon sizes 16x16, 32x32, 48x48)
ico_path = os.path.join(output_folder, "favicon.ico")
favicon_images = [
    Image.open(os.path.join(output_folder, f"favicon_{w}x{h}.png"))
    for w, h in sizes["favicon"]
]
favicon_images[0].save(ico_path, format="ICO", sizes=[(16, 16), (32, 32), (48, 48)])
print(f"Saved: {ico_path}")

# Convert PNG to JPG
for file in os.listdir(output_folder):
    if file.endswith(".png"):
        img = Image.open(os.path.join(output_folder, file)).convert("RGB")
        jpg_path = os.path.join(output_folder, file.replace(".png", ".jpg"))
        img.save(jpg_path, quality=95)
        print(f"Saved: {jpg_path}")

# Cleanup temporary PDF
os.remove(pdf_path)
