import os
import pickle
from googleapiclient.discovery import build
from google_auth_oauthlib.flow import InstalledAppFlow
from google.auth.transport.requests import Request

# If modifying these scopes, delete the file token.pickle.
SCOPES = ['https://www.googleapis.com/auth/blogger']

def get_authenticated_service():
    """Authenticates the user and returns the Blogger API service object."""
    creds = None
    # The file token.pickle stores the user's access and refresh tokens, and is
    # created automatically when the authorization flow completes for the first
    # time.
    if os.path.exists('token.pickle'):
        with open('token.pickle', 'rb') as token:
            creds = pickle.load(token)
            
    # If there are no (valid) credentials available, let the user log in.
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            # You must have a 'credentials.json' file downloaded from Google Cloud Console
            flow = InstalledAppFlow.from_client_secrets_file(
                'credentials.json', SCOPES)
            creds = flow.run_local_server(port=0)
            
        # Save the credentials for the next run
        with open('token.pickle', 'wb') as token:
            pickle.dump(creds, token)

    return build('blogger', 'v3', credentials=creds)

def publish_post(blog_id, title, content, labels=None):
    """Publishes a new post to the specified Blogger blog."""
    service = get_authenticated_service()
    
    post_body = {
        'title': title,
        'content': content,
        'labels': labels if labels else []
    }
    
    try:
        posts = service.posts()
        # To publish immediately, we use insert with isDraft=False (the default)
        request = posts.insert(blogId=blog_id, body=post_body, isDraft=False)
        response = request.execute()
        print(f"Post published successfully!")
        print(f"URL: {response.get('url')}")
    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == '__main__':
    # REPLACE WITH YOUR ACTUAL BLOG ID
    # You can find your Blog ID in the Blogger URL when editing your blog: 
    # e.g., https://www.blogger.com/blog/posts/1234567890123456789 -> 1234567890123456789
    MY_BLOG_ID = 'YOUR_BLOG_ID_HERE'
    
    sample_title = 'High CPC Website Niches for 2026'
    sample_content = '''
    <h1>Top High-CPC Niches in 2026</h1>
    <p>The landscape for high-CPC (Cost-Per-Click) website niches is heavily influenced by sectors with high customer lifetime value.</p>
    <ul>
        <li><strong>Insurance:</strong> Life, Health, Commercial</li>
        <li><strong>Legal Services:</strong> Personal Injury, Defense</li>
        <li><strong>Finance & Investing:</strong> Fintech, Crypto</li>
        <li><strong>AI Tools:</strong> Productivity Automation</li>
    </ul>
    '''
    tags = ['SEO', 'Blogging', 'Finance', 'AI']
    
    # Uncomment the line below to test the script
    # publish_post(MY_BLOG_ID, sample_title, sample_content, tags)
