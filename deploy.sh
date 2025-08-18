#!/bin/bash
# 部署腳本：自動建置並更新根目錄檔案

echo "🚀 開始部署流程..."

# 1. 確保我們在正確的目錄
cd "$(dirname "$0")"

# 2. 建置專案
echo "🔨 建置專案..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ 建置失敗!"
    exit 1
fi

# 3. 備份當前的 index.html (開發版本)
echo "💾 備份開發版本..."
cp index.html index.dev.html

# 4. 複製生產版本到根目錄
echo "📁 複製生產檔案..."
cp dist/index.html .
cp -r dist/assets .

# 5. 確保 404.html 存在
echo "📄 確保 404.html 存在..."
if [ ! -f "404.html" ]; then
    cat > 404.html << 'EOF'
<!DOCTYPE html>
<html lang="zh-TW">
  <head>
    <meta charset="utf-8">
    <title>陽陽儀器</title>
    <script type="text/javascript">
      var pathSegmentsToKeep = 0;
      var l = window.location;
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '/?/' +
        l.pathname.slice(1).split('/').slice(pathSegmentsToKeep).join('/').replace(/&/g, '~and~') +
        (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
        l.hash
      );
    </script>
  </head>
  <body>
  </body>
</html>
EOF
fi

# 6. 確保 sitemap.xml 存在且有內容
echo "🗺️ 確保 sitemap.xml 存在..."
if [ ! -s "sitemap.xml" ]; then
    cat > sitemap.xml << 'EOF'
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yangyangmed.com/</loc>
    <lastmod>2024-12-30</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://yangyangmed.com/products</loc>
    <lastmod>2024-12-30</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://yangyangmed.com/usage-scenarios</loc>
    <lastmod>2024-12-30</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://yangyangmed.com/about</loc>
    <lastmod>2024-12-30</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>
EOF
fi

# 7. 檢查檔案結構
echo "🔍 檢查檔案結構..."
echo "根目錄重要檔案:"
ls -la | grep -E '\.(html|xml)$' | head -5
echo "Assets 檔案:"
ls -la assets/ | head -5

# 8. 提交到 Git
echo "📤 提交變更到 Git..."
git add .
git commit -m "Deploy: $(date '+%Y-%m-%d %H:%M:%S')"

# 詢問是否要推送
echo "🤔 是否要推送到 GitHub? (y/N)"
read -r response
if [[ "$response" =~ ^[Yy]$ ]]; then
    git push origin main
    echo "✅ 已推送到 GitHub!"
    echo "🌐 請等待 2-3 分鐘讓 GitHub Pages 更新"
    echo "🔗 網站：https://yangyangmed.com/"
else
    echo "⏸️ 變更已提交但未推送"
    echo "💡 稍後可以執行: git push origin main"
fi

echo "✅ 部署流程完成!"
