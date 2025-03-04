# Readme
書籍管理アプリの仕様

+ 書籍データをDBから取得する
+ ヘッダーのフィルター機能より書籍名、著者名の絞り込み可能
+ ヘッダーよりGrid、List形式の表示の切り替えが可能
+ 認証機能の実装、ユーザIDに紐づくデータを取得

# 利用技術
+ NextJS
+ TypeScript
+ TailwindCSS
+ shadcn/ui
+ react-hook-form
+ supabase
+ supabase storage
+ clerk

# 環境構築
```
# 関連するライブラリのインストール
$ npm i

# jsonサーバの起動
$ npm run json

# 実行
$ npm run dev
```