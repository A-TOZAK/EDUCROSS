# EDU CROSS in 北九州 2026 — イベント告知サイト

現役教員向けイベント「EDU CROSS in 北九州」の告知・参加募集用ランディングページ。
HTML / CSS / JavaScript のみの静的サイトで、GitHub Pages で公開できる。

## 開催概要
- 日時：2026年8月1日（土）13:00 - 17:00
- 会場：生涯学習総合センター（北九州市小倉北区大門一丁目6番43号）
- 対象：教育関係者（定員20名）
- 参加費：500円
- 主催：EDU CROSS in 北九州実行委員会（代表：外﨑顯博）

## ファイル構成
```
educross-site/
├── index.html          # ページ本体
├── css/style.css       # スタイル
├── js/main.js          # メニュー・FAQ開閉・トップ戻る
├── assets/img/flyer.png # 一次案内チラシ（メインビジュアル）
└── README.md
```

## ローカルで確認
```
cd educross-site
python3 -m http.server 8000
# ブラウザで http://localhost:8000
```

## GitHub Pages で公開する手順
1. GitHub で新しいリポジトリ（例：`educross-kitakyushu`）を作成
2. このフォルダを push
   ```
   git add .
   git commit -m "EDU CROSS in 北九州 告知サイト"
   git branch -M main
   git remote add origin https://github.com/<ユーザー名>/educross-kitakyushu.git
   git push -u origin main
   ```
3. リポジトリの Settings → Pages → Branch を `main` / `root` に設定
4. 数分後に `https://<ユーザー名>.github.io/educross-kitakyushu/` で公開

## 差し替えが必要な箇所（TODO）
- ~~申し込みフォームのURL~~ → 設定済み（Googleフォームへリンク：ヘッダー／参加方法セクションのボタン）
- ~~申込締切日~~ → 確定済み（2026年7月31日（金）。※7/25は土曜のため誤り、修正済み）
- **昨年度の様子（ギャラリー）**：現在はデザインのプレースホルダー。実写真の掲載可否が決まったら
  `assets/img/` に写真を入れ、`#galleryGrid` のプレースホルダーを `<img>` に差し替える
