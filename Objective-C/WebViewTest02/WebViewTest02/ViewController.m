//
//  ViewController.m
//  WebViewTest02
//
//  Created by 王驰 on 15/2/4.
//  Copyright (c) 2015年 Walker. All rights reserved.
//

#import "ViewController.h"

@interface ViewController ()

@end

@implementation ViewController

//- (void)viewDidLoad {
//    [super viewDidLoad];
//    // Do any additional setup after loading the view, typically from a nib.
//}
//
//- (void)didReceiveMemoryWarning {
//    [super didReceiveMemoryWarning];
//    // Dispose of any resources that can be recreated.
//}

- (void)viewDidLoad
{
    [super viewDidLoad];
    
    
    // 导航条
    tableView = [[UITableView alloc] initWithFrame:CGRectMake(0, 0, [UIScreen mainScreen].bounds.size.width, 20)];
    tableView.delegate = self;
    tableView.backgroundColor=[UIColor colorWithRed:232/255.0 green:65/255.0 blue:67/255.0 alpha:1];
    [self.view addSubview:tableView];
    
    
    // 状态栏样式重写
//    UIView *statusBarView=[[UIView alloc] initWithFrame:CGRectMake(0, 0, 320, 20)];
//    statusBarView.backgroundColor=[UIColor redColor];
//    [self.view addSubview:statusBarView];
//    [[UIApplication sharedApplication] setStatusBarStyle:UIStatusBarStyleLightContent animated:NO];
    
    
    // webview 加载webapp
    webView = [[UIWebView alloc] initWithFrame:CGRectMake(0, 20, [UIScreen mainScreen].bounds.size.width, [UIScreen mainScreen].bounds.size.height - 20 )];
    [webView setDelegate:self];
    
    [self.view addSubview:webView];
    
    NSURL* url = [NSURL URLWithString:@"http://m.jiae.com"];
    [webView loadRequest:[NSURLRequest requestWithURL:url]];
}



- (void) webViewDidStartLoad:(UIWebView  *)webView {

}


- (void) webViewDidFinishLoad:(UIWebView *)webView{

}

@end
