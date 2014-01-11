#!/bin/bash
#
# Block some script kiddies

iptables -A INPUT -s 82.98.104.217 -j DROP
iptables -A INPUT -s 118.123.12.32 -j DROP
iptables -A INPUT -s 183.60.202.53 -j DROP
iptables -A INPUT -s 222.186.34.145 -j DROP
iptables -A INPUT -s 98.113.247.161 -j DROP
iptables -A INPUT -s 176.102.37.56 -j DROP
iptables -A INPUT -s 162.243.198.250 -j DROP
