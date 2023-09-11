import useSWR from 'swr';
import { getBlogDetail } from './microcms';

const BlogPreview = () => {
  const params = new URLSearchParams(window.location.search);
  const contentId = params.get('contentId');
  const draftKey = params.get('draftKey');

  const { data, error, isLoading, isValidating } = useSWR(
    contentId === null || draftKey === null
      ? null
      : ['/preview', contentId, draftKey],
    ([, contentId, draftKey]) => getBlogDetail(contentId, { draftKey }),
  );

  if (error) return <div>エラーが発生しました</div>;

  if (isLoading) return <div>読み込み中...</div>;

  return (
    <div>
      <h1>{data?.title}mmmmmmmkm</h1>
      <p>{data?.publishedAt ?? data?.createdAt}</p>
      <div dangerouslySetInnerHTML={{ __html: data?.content ?? '' }} />

      {isValidating && <div>更新中...</div>}
    </div>
  );
};

export default BlogPreview;
